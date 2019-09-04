const Mock = require('../utils/mock-util');
const SchemaValidator = require('../utils/schemavalidator');
const Katalog = require('../katalog');

const { moduleName: aw } = Katalog.pathnameMap.fagsaker_aw;
const { moduleName: ffb } = Katalog.pathnameMap.fagsaker_fb;
const { moduleName: fub } = Katalog.pathnameMap.fagsaker_ub;

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
  switch (sektor) {
    case aw:
      module = aw;
      break;
    case ffb:
      module = ffb;
      break;
    case fub:
    default:
      module = fub;
      break;
  }
  return SchemaValidator.get(module, req, res);
};
