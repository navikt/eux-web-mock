const Mock = require('../utils/mock-util');
const SchemaValidator = require('../utils/schemavalidator');
const Katalog = require('../katalog');

const { moduleName: ffb } = Katalog.pathnameMap.fagsaker_fb;
const { moduleName: fub } = Katalog.pathnameMap.fagsaker_ub;

module.exports.saksliste = async (req, res) => {
  const { fnr } = req.params;
  if (!fnr) {
    return Mock.manglerParamFnr(req, res);
  }
  const { sektor } = req.query;
  if (!sektor) {
    return Mock.manglerParamSektor(req, res);
  }

  const module = (sektor === ffb) ? ffb : fub;
  return SchemaValidator.get(module, req, res);
};
