"use strict";
/* ============================================================================
   SCRAPLAND — a tiny top-down, Rust-inspired survival sandbox
   Single file. Vanilla canvas. Survival/military palette. No audio.
   ========================================================================== */

/* ----------------------------- constants -------------------------------- */
const TILE = 64;                 // grid / building cell size
const WORLD = { w: 13824, h: 9216 };     // map size (R33: +20% bigger — was 11520×7680)
const PLAYER_R = 16;
const GATHER_RANGE = 64;
const COL = {
  grass:'#43602a', grassDk:'#2f441f88', grassLt:'#5c7e38',
  dirt:'#4b4327', ink:'#14140e',
  wood:'#a8722f', woodLt:'#c98f42', woodDk:'#6f4a22',
  stone:'#8c939b', stoneLt:'#aab1b8', stoneDk:'#5f656c',
  metal:'#caa15f', metalOre:'#e08a36', metalDk:'#6b5320',
  player:'#6f7d4a', playerDk:'#4d5732', skin:'#caa07a',
  gun:'#2c2f28', gunLt:'#54584c',
  barrel:'#b0492e', barrelLt:'#d2664a', barrelRim:'#6f2c1a',
  flash:'#ffd76b', tracer:'#ffe9a3', hmgTracer:'#ff5a2a', ricochet:'#86d8ff',
  ghostOk:'rgba(180,220,120,.45)', ghostBad:'rgba(210,80,60,.5)',
  doorWood:'#7d5430',
  boar:'#8a6b4a', boarDk:'#5e4730', wolf:'#80818a', wolfDk:'#4d4e55',
  bear:'#6b4f39', bearDk:'#40301f', blood:'#9e2b1e',
  rocket:'#39402f', rocketHot:'#ff9b3d', explosion:'#ffb24a', scorch:'rgba(18,14,10,.5)',
  steelDk:'#41464d', steel:'#5b626b', steelLt:'#7d8893',
  box:'#7a5630', boxDk:'#3e2c16', boxLt:'#9a6e3c',
  copter:'#566048', copterLt:'#6c784f', copterDk:'#333c30', glass:'rgba(150,200,230,.6)',
  turret:'#565d4c', turretDk:'#3b4138',
  lockRed:'#c0432f', lockGreen:'#7bbf4f',
  bpFill:'#1d241b', bpWall:'#8696a8', bpFloor:'#39432f', losEdge:'rgba(150,180,210,0.10)',
  tc:'#caa24a', tcDk:'#6e5020', tcLt:'#e6c878', night:'#070d22', flashlight:'#fff2c0'
};

