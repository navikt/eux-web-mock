const pathnameMap = {
  arbeidsforhold: {
    moduleName: 'arbeidsforhold',
    get: {
      pathname: '/arbeidsforhold/:fnr',
      params: { fnr: '70057418034' },
    },
  },
  fagsaker_ad: {
    moduleName: 'fagsaker_ad',
    get: {
      pathname: '/fagsaker/:fnr/?sektor=AD&tema=GEN',
      params: { fnr: '70057418034' },
    },
  },
  fagsaker_aw: {
    moduleName: 'fagsaker_aw',
    get: {
      pathname: '/fagsaker/:fnr/?sektor=AW&tema=GEN',
      params: { fnr: '70057418034' },
    },
  },
  fagsaker_fb: {
    moduleName: 'fagsaker_fb',
    get: {
      pathname: '/fagsaker/:fnr/?sektor=FB&tema=GEN',
      params: { fnr: '70057418034' },
    },
  },
  fagsaker_hz: {
    moduleName: 'fagsaker_hz',
    get: {
      pathname: '/fagsaker/:fnr/?sektor=HZ&tema=GEN',
      params: { fnr: '70057418034' },
    },
  },
  fagsaker_la: {
    moduleName: 'fagsaker_la',
    get: {
      pathname: '/fagsaker/:fnr/?sektor=LA&tema=GEN',
      params: { fnr: '70057418034' },
    },
  },
  fagsaker_mi: {
    moduleName: 'fagsaker_mi',
    get: {
      pathname: '/fagsaker/:fnr/?sektor=MI&tema=GEN',
      params: { fnr: '70057418034' },
    },
  },
  fagsaker_pe: {
    moduleName: 'fagsaker_pe',
    get: {
      pathname: '/fagsaker/:fnr/?sektor=PE&tema=GEN',
      params: { fnr: '70057418034' },
    },
  },
  fagsaker_re: {
    moduleName: 'fagsaker_re',
    get: {
      pathname: '/fagsaker/:fnr/?sektor=RE&tema=GEN',
      params: { fnr: '70057418034' },
    },
  },
  fagsaker_si: {
    moduleName: 'fagsaker_si',
    get: {
      pathname: '/fagsaker/:fnr/?sektor=SI&tema=GEN',
      params: { fnr: '70057418034' },
    },
  },
  fagsaker_ub: {
    moduleName: 'fagsaker_ub',
    get: {
      pathname: '/fagsaker/:fnr/?sektor=UB&tema=GEN',
      params: { fnr: '70057418034' },
    },
  },
  institusjoner: {
    moduleName: 'institusjoner',
    get: {
      pathname: '/institusjoner/:buctype/?landkode=DK',
      params: { buctype: 'FB_BUC_01' },
    },
  },
  personer: {
    moduleName: 'personer',
    get: {
      pathname: '/personer/?fnr=70057418034',
    },
  },
  'rina-dokumenter': {
    moduleName: 'rina-dokumenter',
    get: {
      pathname: '/rina/dokumenter/?rinasaksnummer=161007',
    },
  },
  'rina-sak': {
    moduleName: 'rina-sak',
    post: {
      pathname: '/rina/sak',
    },
  },
  'rina-vedlegg': {
    moduleName: 'rina-vedlegg',
    post: {
      pathname: '/rina/vedlegg',
    },
  },
  saksbehandler: {
    moduleName: 'saksbehandler',
    get: {
      pathname: '/saksbehandler',
    },
  },
};

const katalog = [];
for (const path in pathnameMap) {
  const strings = [path, pathnameMap[path]];
  katalog.push(strings);
}
const katalogMap = new Map(katalog);
module.exports = {
  pathnameMap,
  katalogMap,
};
