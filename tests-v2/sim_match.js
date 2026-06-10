// Headless match runner: node tests-v2/sim_match.js [minutes] [seed]
// Prints behavior metrics every sim-minute and a final summary.
import { createSim, step } from '../src/sim/sim.js';

const minutes = +process.argv[2] || 30;
const seed = +process.argv[3] || 42;

const S = createSim(seed);
const t0 = Date.now();
let peak = { v: 0 };
let lastMin = 0;

for (let i = 0; i < 60 * 60 * minutes; i++) {
  step(S);
  if (i % 30 === 0) {
    for (const u of S.units) {
      if (!u.dead && !u.eliminated && u.state !== 'raid' && u.stuckT > peak.v) {
        peak = { v: u.stuckT, s: u.state, a: u.act, t: S.t | 0, owner: u.owner };
      }
    }
  }
  if (S.t - lastMin >= 60) {
    lastMin = S.t;
    const alive = S.teams.filter(t => !t.eliminated).length;
    const units = S.units.filter(u => !u.dead && !u.eliminated).length;
    console.log(`[${(S.t / 60) | 0}m] teams:${alive} units:${units} structs:${S.structures.size} raids:${S.metrics.raidsLaunched} tcKilled:${S.metrics.tcKilled} maxStuck:${S.metrics.maxStuck.toFixed(1)} pathFails:${S.metrics.pathFails} elims:${S.metrics.elims}` + (S.metrics.winner ? ` WINNER:${S.metrics.winner}@${(S.metrics.decisiveT / 60).toFixed(1)}m` : ''));
    if (S.metrics.winner) break;
  }
}

const wall = ((Date.now() - t0) / 1000).toFixed(1);
const m = S.metrics;
console.log('--- summary ---');
console.log(JSON.stringify({
  seed, simMin: +(S.t / 60).toFixed(1), wallSec: +wall,
  winner: m.winner, decisiveMin: m.decisiveT ? +(m.decisiveT / 60).toFixed(1) : null,
  elims: m.elims, raids: m.raidsLaunched, tcKilled: m.tcKilled,
  maxStuckNonRaid: +m.maxStuck.toFixed(1), peakObserved: { v: +peak.v.toFixed(1), s: peak.s, a: peak.a, t: peak.t, owner: peak.owner },
  pathFails: m.pathFails, doorCuts: m.doorCuts || 0, nan: m.nan || 0,
  regionStuck: m.regionStuck, hardUnstick: m.hardUnstick,
}, null, 1).replace(/\n\s*/g, ' '));
console.log('workers:', JSON.stringify(m.workerLog[m.workerLog.length - 1] || {}));
console.log('hard teams:', S.teams.filter(t => t.hard).map(t => t.owner).join(',') || 'none');
const actT = Object.values(m.act).reduce((a, b) => a + b, 0);
console.log('act share %:', JSON.stringify(Object.fromEntries(Object.entries(m.act).map(([k, v]) => [k, +(v / actT * 100).toFixed(1)]).filter(([, v]) => v > 0.5))));
