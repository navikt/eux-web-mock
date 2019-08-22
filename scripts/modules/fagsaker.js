const Mock = require('../utils/mock-util');
const SchemaValidator  = require('../utils/schemavalidator');
const Katalog = require('../katalog');

const { moduleName } = Katalog.pathnameMap['fagsaker'];

module.exports.saksliste = async (req, res) => {
  const { fnr } = req.params;
  if (!fnr) {
    return Mock.manglerParamFnr(req, res);
  }
  const { sektor } = req.query;
  if (!sektor) {
    return Mock.manglerParamSektor(req, res);
  }
  const pathObject = {
    pathname: `${sektor}_fagsaker`,
  };
  return SchemaValidator.get(moduleName, req, res, pathObject );
};
