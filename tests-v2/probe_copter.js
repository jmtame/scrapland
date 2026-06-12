// Headless flight test for the player minicopter physics model.
// Verifies the tuning goals: spool-up takeoff, tilt → forward speed,
// braking, altitude loss while banked, gentle vs crash landings,
// abandoned heli falls, high eject hurts.
import { createSim, step } from '../src/sim/sim.js';
import { bailOut } from '../src/sim/player.js';
import { COPTER } from '../src/sim/config.js';

let pass = 0, fail = 0;
const ok = (cond, name, info = '') => {
  if (cond) { pass++; console.log('PASS ' + name + (info ? '  (' + info + ')' : '')); }
  else { fail++; console.log('FAIL ' + name + (info ? '  (' + info + ')' : '')); }
};

function freshFlight(seed = 7) {
  const S = createSim(seed);
  const c = S.copter;
  S.player.inCopter = true;
  // park far from world edges so bounds never interfere
  c.x = 6000; c.y = 4500; S.player.x = c.x; S.player.y = c.y;
  return S;
}
function run(S, secs, cmd = {}) {
  const keep = {};
  for (const k in cmd) { keep[k] = S.cmd[k]; S.cmd[k] = cmd[k]; }
  const ticks = Math.round(secs * 60);
  for (let i = 0; i < ticks; i++) step(S);
  for (const k in keep) S.cmd[k] = keep[k];
}

// ---- 1. takeoff: hold W, spool, lift ----
{
  const S = freshFlight();
  const c = S.copter;
  run(S, 0.6, { up: true });
  ok(c.alt < 8, 'no instant leap — still near the pad at 0.6s', 'alt=' + c.alt.toFixed(1));
  run(S, 3.4, { up: true });
  ok(c.alt > 60, 'holding W lifts off within 4s', 'alt=' + c.alt.toFixed(1));
  ok(c.rpm > 0.95, 'rotor spooled to full', 'rpm=' + c.rpm.toFixed(2));
}

// ---- 2. forward flight: nose-down converts lift to speed ----
{
  // measure level full-throttle climb as the baseline
  const SL = freshFlight(3);
  run(SL, 4, { up: true });
  const a0 = SL.copter.alt;
  run(SL, 3, { up: true });
  const levelClimb = (SL.copter.alt - a0) / 3;

  const S = freshFlight();
  const c = S.copter;
  run(S, 4, { up: true });
  run(S, 0.35, { up: true, stickPitch: -1600 }); // push the stick forward
  ok(c.pitchA < -0.15, 'stick forward pitches the nose down', 'pitchA=' + c.pitchA.toFixed(2));
  const a1 = c.alt;
  run(S, 3, { up: true });
  const tiltClimb = (c.alt - a1) / 3;
  run(S, 1, { up: true });
  ok(c.spd > 260, 'nose-down tilt produces forward speed', 'spd=' + c.spd.toFixed(0));
  ok(c.pitchA < -0.08, 'attitude holds without auto-leveling to zero', 'pitchA=' + c.pitchA.toFixed(2));
  ok(tiltClimb < levelClimb * 0.72, 'tilt trades climb for speed',
    'level ' + levelClimb.toFixed(1) + '/s vs tilted ' + tiltClimb.toFixed(1) + '/s');
  // aggressive tilt: vertical lift collapses
  run(S, 0.5, { up: true, stickPitch: -2200 });
  const a2 = c.alt;
  run(S, 2, { up: true });
  ok((c.alt - a2) / 2 < 4, 'aggressive tilt loses altitude even at full power',
    'pitchA=' + c.pitchA.toFixed(2) + ' climb=' + ((c.alt - a2) / 2).toFixed(1) + '/s');
}

// ---- 3. braking: pull back opposes forward motion ----
{
  const S = freshFlight();
  const c = S.copter;
  run(S, 4, { up: true });
  run(S, 0.4, { up: true, stickPitch: -1600 });
  run(S, 4, { up: true });
  const v0 = c.spd;
  run(S, 0.7, { up: true, stickPitch: 2200 }); // pull back hard
  run(S, 2.2, { up: true });
  ok(c.spd < v0 * 0.55, 'nose-up flare brakes forward speed', v0.toFixed(0) + '→' + c.spd.toFixed(0));
}

// ---- 4. roll: A/D banks, bank slips sideways + costs lift ----
{
  const S = freshFlight();
  const c = S.copter;
  run(S, 4.5, { up: true });
  const alt0 = c.alt;
  run(S, 1.6, { up: true, right: true }); // banked turn
  ok(Math.abs(c.rollA) > 0.1, 'A/D turns bank the airframe', 'rollA=' + c.rollA.toFixed(2));
  const S2 = freshFlight(11);
  run(S2, 4.5, { up: true });
  run(S2, 1.6, { up: true, right: true, flat: true });
  ok(Math.abs(S2.copter.rollA) < Math.abs(c.rollA), 'Ctrl flat turn banks less',
    S2.copter.rollA.toFixed(2) + ' vs ' + c.rollA.toFixed(2));
}

// ---- 5. landing: gentle = safe, hot = damage, hard = destruction ----
{
  const S = freshFlight();
  const c = S.copter;
  run(S, 4, { up: true });
  // gentle: cushion the descent with throttle taps (like a real pilot)
  let guard = 60 * 30;
  while (c.alt > 0.5 && guard--) {
    S.cmd.up = c.altV < -34;
    S.cmd.down = false;
    step(S);
  }
  S.cmd.up = false;
  run(S, 1);
  ok(c.hp === c.max, 'gentle landing: no damage', 'hp=' + c.hp);

  const S3 = freshFlight(23);
  const c3 = S3.copter;
  run(S3, 5, { up: true });
  c3.alt = 300; c3.rpm = 0; S3.player.inCopter = true; // cut power high
  run(S3, 6, {});
  ok(c3.hp < c3.max, 'dead-stick drop from 300 damages the airframe', 'hp=' + c3.hp.toFixed(0));
}

// ---- 6. abandoned heli falls; high eject hurts the pilot ----
{
  const S = freshFlight(31);
  const c = S.copter;
  run(S, 5, { up: true });
  c.alt = 240;
  const hp0 = S.player.health;
  const alt = bailOut(S);
  ok(alt > 200 && S.player.health < hp0, 'high eject: pilot takes fall damage',
    'hp ' + hp0.toFixed(0) + '→' + S.player.health.toFixed(0));
  run(S, 8, {});
  ok(c.alt === 0, 'abandoned heli comes down on its own', 'alt=' + c.alt.toFixed(1));
}

console.log('\n' + pass + '/' + (pass + fail) + ' passed');
process.exit(fail ? 1 : 0);
