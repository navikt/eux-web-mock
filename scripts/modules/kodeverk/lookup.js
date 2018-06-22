const lookup = {
  sector2BucGruppe: {
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
  },
  buc2Seds: {
    FB_BUC_01: ['SED_F001'],
    FB_BUC_02: ['SED_F016'],
    FB_BUC_03: ['SED_F018','SED_F021'],
    FB_BUC_04: ['SED_F003']
  }
};
exports.lookup = lookup;
