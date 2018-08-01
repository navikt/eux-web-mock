const SEKTOR2BUC = {
  AD: 'administrativ',
  AW: 'awod',
  FB: 'familie',
  HZ: 'horisontal',
  LA: 'lovgivning',
  MI: 'miscellaneous',
  PE: 'pensjon',
  RE: 'gjenoppretting',
  SI: 'sykdom',
  UB: 'arbeidsledighet',
};
const FB = {
  FB_BUC_01: ['F001'],
  FB_BUC_02: ['F016'],
  FB_BUC_03: ['F018','F021'],
  FB_BUC_04: ['F003']
};
const AD = {};
const AW = {};
const HZ = {
  H_BUC_01: ['H001'],
  H_BUC_02a: ['H005'],
  H_BUC_04: ['H020'],
  H_BUC_06: ['H065'],
  H_BUC_07: ['H070'],
  H_BUC_08: ['H120'],
  H_BUC_09: ['H121']
};
const LA = {
  LA_BUC_01: ['A001'],
  LA_BUC_02: ['A003'],
  LA_BUC_03: ['A008'],
  LA_BUC_04: ['A009'],
  LA_BUC_05: ['A010'],
  LA_BUC_06: ['A005']
};
const MI = {};
const PE = {
  P_BUC_01: ['P2000'],
  P_BUC_02: ['P2100'],
  P_BUC_03: ['P2200'],
  P_BUC_04: ['P1000'],
  P_BUC_05: ['P8000'],
  P_BUC_06: ['P10000','P5000','P6000','P7000'],
  P_BUC_07: ['P11000'],
  P_BUC_08: ['P12000'],
  P_BUC_09: ['P14000'],
  P_BUC_10: ['P15000'],
};
const RE = {
  R_BUC_01: ['R001'],
  R_BUC_02: ['R005'],
  R_BUC_03: ['R008'],
  R_BUC_05: ['R012'],
  R_BUC_06: ['R015'],
  R_BUC_07: ['R017'],
};
const SI = {};
const UB = {
  UB_BUC_01: ['U001','U001CB','U003','U005'],
  UB_BUC_02: ['U007','U009'],
  UB_BUC_03: ['U018'],
  UB_BUC_04: ['U020'],
};

const BUC2SEDS = {
  FB, AD, AW, HZ, LA, MI, PE, RE, SI, UB,
};
const kodemaps = {
  SEKTOR2BUC,
  BUC2SEDS,
};
exports.kodemaps = kodemaps;
