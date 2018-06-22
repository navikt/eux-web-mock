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
  FB_BUC_01: ['SED_F001'],
  FB_BUC_02: ['SED_F016'],
  FB_BUC_03: ['SED_F018','SED_F021'],
  FB_BUC_04: ['SED_F003']
};
const BUC2SEDS = {
  FB,
};
const kodemaps = {
  SECTOR2BUC,
  BUC2SEDS
};
exports.kodemaps = kodemaps;
