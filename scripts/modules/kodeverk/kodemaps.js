const SEKTOR2BUC = {
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
const SEKTOR2BOMA = {
  AD: 'family',
  AW: 'family',
  FB: 'family',
  HZ: 'family',
  LA: 'family',
  MI: 'family',
  PE: 'family',
  RE: 'family',
  SI: 'family',
  UB: 'family',
};
// AD => SEDTYPER
const AD = {
  AD_BUC_01: ['DUMMY'],
  AD_BUC_02: ['DUMMY'],
  AD_BUC_03: ['DUMMY'],
  AD_BUC_04: ['DUMMY'],
  AD_BUC_05: ['DUMMY'],
  AD_BUC_06: ['DUMMY'],
  AD_BUC_07: ['DUMMY'],
  AD_BUC_08: ['DUMMY'],
  AD_BUC_09: ['DUMMY'],
  AD_BUC_10: ['DUMMY'],
  AD_BUC_11: ['DUMMY'],
  AD_BUC_12: ['DUMMY'],
};
// AW => SEDTYPER
const AW = {
  AW_BUC_01a: ['DUMMY'],
  AW_BUC_01b: ['DUMMY'],
  AW_BUC_02: ['DUMMY'],
  AW_BUC_03: ['DUMMY'],
  AW_BUC_04a: ['DUMMY'],
  AW_BUC_04b: ['DUMMY'],
  AW_BUC_4c: ['DUMMY'],
  AW_BUC_05: ['DUMMY'],
  AW_BUC_06a: ['DUMMY'],
  AW_BUC_06b: ['DUMMY'],
  AW_BUC_06c: ['DUMMY'],
  AW_BUC_07a: ['DUMMY'],
  AW_BUC_07b: ['DUMMY'],
  AW_BUC_07c: ['DUMMY'],
  AW_BUC_07d: ['DUMMY'],
  AW_BUC_08: ['DUMMY'],
  AW_BUC_09a: ['DUMMY'],
  AW_BUC_09b: ['DUMMY'],
  AW_BUC_10a: ['DUMMY'],
  AW_BUC_10b: ['DUMMY'],
  AW_BUC_11: ['DUMMY'],
  AW_BUC_12: ['DUMMY'],
  AW_BUC_13: ['DUMMY'],
  AW_BUC_14: ['DUMMY'],
  AW_BUC_15: ['DUMMY'],
  AW_BUC_23: ['DUMMY'],
};
// FB => SEDTYPER
const FB = {
  FB_BUC_01: ['F001'],
  FB_BUC_02: ['F016'],
  FB_BUC_03: ['F021'],
  FB_BUC_04: ['F003'],
};
// HZ => SEDTYPER
const HZ = {
  H_BUC_01: ['H001'],
  H_BUC_02a: ['H005'],
  H_BUC_02b: ['DUMMY'],
  H_BUC_02c: ['DUMMY'],
  H_BUC_03a: ['DUMMY'],
  H_BUC_03b: ['DUMMY'],
  H_BUC_04: ['H020'],
  H_BUC_05: ['DUMMY'],
  H_BUC_06: ['H065'],
  H_BUC_07: ['H070'],
  H_BUC_08: ['H120'],
  H_BUC_09: ['H121'],
  H_BUC_10: ['DUMMY'],
};
// LA => SEDTYPER
const LA = {
  LA_BUC_01: ['A001'],
  LA_BUC_02: ['A003'],
  LA_BUC_03: ['A008'],
  LA_BUC_04: ['A009'],
  LA_BUC_05: ['A010'],
  LA_BUC_06: ['A005'],
};
// MI => SEDTYPER
const MI = {
  MI_BUC_01: ['DUMMY'],
  MI_BUC_02: ['DUMMY'],
  MI_BUC_03a: ['DUMMY'],
  MI_BUC_03b: ['DUMMY'],
};
// PE => SEDTYPER
const PE = {
  P_BUC_01: ['P2000'],
  P_BUC_02: ['P2100'],
  P_BUC_03: ['P2200'],
  P_BUC_04: ['P1000'],
  P_BUC_05: ['P8000'],
  P_BUC_06: ['P10000', 'P5000', 'P6000', 'P7000'],
  P_BUC_07: ['P11000'],
  P_BUC_08: ['P12000'],
  P_BUC_09: ['P14000'],
  P_BUC_10: ['P15000'],
};
// RE => SEDTYPER
const RE = {
  R_BUC_01: ['R001'],
  R_BUC_02: ['R005'],
  R_BUC_03: ['R008'],
  R_BUC_04: ['DUMMY'],
  R_BUC_05: ['R012'],
  R_BUC_06: ['R015'],
  R_BUC_07: ['R017'],
};
// SI => SEDTYPER
const SI = {
  SI_BUC_01: ['DUMMY'],
  SI_BUC_01a: ['DUMMY'],
  SI_BUC_02: ['DUMMY'],
  SI_BUC_03: ['DUMMY'],
  SI_BUC_04: ['DUMMY'],
  SI_BUC_05: ['DUMMY'],
  SI_BUC_06: ['DUMMY'],
  SI_BUC_07: ['DUMMY'],
  SI_BUC_08: ['DUMMY'],
  SI_BUC_09: ['DUMMY'],
  SI_BUC_11: ['DUMMY'],
  SI_BUC_12: ['DUMMY'],
  SI_BUC_14: ['DUMMY'],
  SI_BUC_14a: ['DUMMY'],
  SI_BUC_14b: ['DUMMY'],
  SI_BUC_15: ['DUMMY'],
  SI_BUC_17: ['DUMMY'],
  SI_BUC_17a: ['DUMMY'],
  SI_BUC_18: ['DUMMY'],
  SI_BUC_18a: ['DUMMY'],
  SI_BUC_19: ['DUMMY'],
  SI_BUC_21: ['DUMMY'],
  SI_BUC_22: ['DUMMY'],
  SI_BUC_23: ['DUMMY'],
  SI_BUC_24: ['DUMMY'],
};
// UB => SEDTYPER
const UB = {
  UB_BUC_01: ['U001', 'U001CB', 'U003', 'U005'],
  UB_BUC_02: ['U007', 'U009'],
  UB_BUC_03: ['U018'],
  UB_BUC_04: ['U020_Master'],
  UB_BUC_05: ['DUMMY'],
};
const BUC2SEDS = {
  AD, AW, FB, HZ, LA, MI, PE, RE, SI, UB,
};
const kodemaps = {
  SEKTOR2BOMA,
  SEKTOR2BUC,
  BUC2SEDS,
};
module.exports.kodemaps = kodemaps;
