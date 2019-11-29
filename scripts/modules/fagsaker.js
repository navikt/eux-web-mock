const Mock = require('../utils/mock-util');
const SchemaValidator = require('../utils/schemavalidator');
const Katalog = require('../katalog');

const { moduleName: ad } = Katalog.pathnameMap.fagsaker_ad;
const { moduleName: aw } = Katalog.pathnameMap.fagsaker_aw;
const { moduleName: fb } = Katalog.pathnameMap.fagsaker_fb;
const { moduleName: hz } = Katalog.pathnameMap.fagsaker_hz;
const { moduleName: la } = Katalog.pathnameMap.fagsaker_la;
const { moduleName: mi } = Katalog.pathnameMap.fagsaker_mi;
const { moduleName: pe } = Katalog.pathnameMap.fagsaker_pe;
const { moduleName: re } = Katalog.pathnameMap.fagsaker_re;
const { moduleName: si } = Katalog.pathnameMap.fagsaker_si;
const { moduleName: ub } = Katalog.pathnameMap.fagsaker_ub;

module.exports.saksliste = async (req, res) => {
  const { fnr } = req.params;
  if (!fnr) {
    return Mock.manglerParamFnr(req, res);
  }
  const { sektor, tema } = req.query;
  if (!sektor) {
    return Mock.manglerParamSektor(req, res);
  }
  if (!tema) {
    return Mock.manglerParamTema(req, res);
  }

  let module;
  switch (sektor.toUpperCase()) {
    case 'AD':
      module = ad;
      break;
    case 'AW':
      module = aw;
      break;
    case 'FB':
      module = fb;
      break;
    case 'HZ':
      module = hz;
      break;
    case 'LA':
      module = la;
      break;
    case 'MI':
      module = mi;
      break;
    case 'PE':
      module = pe;
      break;
    case 'RE':
      module = re;
      break;
    case 'SI':
      module = si;
      break;
    case 'UB':
    default:
      module = ub;
      break;
  }
  return SchemaValidator.get(module, req, res);
};
