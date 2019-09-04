const pathnameMap = {
  arbeidsforhold: {
    moduleName: 'arbeidsforhold',
    get: {
      pathname: '/arbeidsforhold/:fnr',
      params: { fnr: '70057418034' },
    },
  },
  fagsaker_aw: {
    moduleName: 'fagsaker_aw',
    get: {
      pathname: '/fagsaker/:fnr/?sektor=aw',
      params: { fnr: '70057418034' },
    },
  },
  fagsaker_fb: {
    moduleName: 'fagsaker_fb',
    get: {
      pathname: '/fagsaker/:fnr/?sektor=fb',
      params: { fnr: '70057418034' },
    },
  },
  fagsaker_ub: {
    moduleName: 'fagsaker_ub',
    get: {
      pathname: '/fagsaker/:fnr/?sektor=ub',
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
