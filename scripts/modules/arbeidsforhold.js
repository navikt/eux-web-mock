const Mock = require('../utils/mock-util');
const Katalog = require('../katalog');
const SchemaValidator = require('../utils/schemavalidator');

const { moduleName } = Katalog.pathnameMap.arbeidsforhold;

module.exports.hent = async (req, res) => {
  const { fnr } = req.params;
  if (!fnr) {
    return Mock.manglerParamFnr(req, res);
  }
  if (fnr.length !== 11) {
    return Mock.badRequestParam(req, res, 'Fnr må ha 11 siffer');
  }

  return SchemaValidator.get(moduleName, req, res);
};
