const Katalog = require('../katalog');
const SchemaValidator = require('../utils/schemavalidator');
const { moduleName } = Katalog.pathnameMap['arbeidsforhold'];

module.exports.hent = async (req, res) => {
  const { fnr } = req.params;
  if (!fnr) {
    return Mock.manglerParamFnr(req, res);
  }
  else if (fnr.length !== 11) {
    return Mock.badRequestParam(req, res, 'Fnr må ha 11 siffer')
  }

  SchemaValidator.get(moduleName, req, res);
};
