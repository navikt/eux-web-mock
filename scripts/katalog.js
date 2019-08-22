const pathnameMap = {
  arbeidsforhold: {
    moduleName: 'arbeidsforhold',
    get: {
      pathname: '/arbeidsforhold/:fnr',
      params: { fnr: '70057418034' },
    },
  },
  fagsaker: {
    moduleName: 'fagsaker',
    get: {
      pathname: '/fagsaker/:fnr/?sektor=ub',
      params: { fnr: '70057418034' },
    },
  },
  /*
  institusjoner: {
    moduleName: 'institusjoner',
    get: {
      pathname: '/institusjoner/:orgnr',
      params: { orgnr: '810072512' },
    },
  },
  */
  personer: {
    moduleName: 'personer',
    get: {
      pathname: '/personer/?fnr=70057418034'
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
