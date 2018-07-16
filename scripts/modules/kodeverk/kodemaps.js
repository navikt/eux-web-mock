const SECTOR2BUC = {
  AD: 'administrative',
  AW: 'awod',
  FB: 'family',
  HZ: 'horizontal',
  LA: 'legislation',
  MI: 'miscellaneous',
  PE: 'pensions',
  RE: 'recovery',
  SI: 'sickness',
  UB: 'unemployment',
};
const FB = {
  FB_BUC_01: ['F001'],
  FB_BUC_02: ['F016'],
  FB_BUC_03: ['F018','F021'],
  FB_BUC_04: ['F003']
};
const BUC2SEDS = {
  FB,
};
const kodemaps = {
  SECTOR2BUC,
  BUC2SEDS
};
exports.kodemaps = kodemaps;
