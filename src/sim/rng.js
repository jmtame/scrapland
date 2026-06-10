// Seeded RNG (mulberry32). All sim randomness flows through one instance so a
// seed fully determines a match. The renderer may use Math.random freely.
export function makeRng(seed) {
  let a = (seed >>> 0) || 1;
  const next = () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  return {
    next,
    rand: (lo = 0, hi = 1) => lo + next() * (hi - lo),
    randi: (lo, hi) => Math.floor(lo + next() * (hi - lo + 1)),
    chance: (p) => next() < p,
    pick: (arr) => arr[Math.floor(next() * arr.length)],
    angle: () => next() * Math.PI * 2,
  };
}
