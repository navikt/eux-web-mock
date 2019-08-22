const Mock = require('../utils/mock-util');
const Katalog = require('../katalog');
const SchemaValidator = require('../utils/schemavalidator');

/**
 * hent
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
module.exports.hent = async (req, res) => {
  const { fnr } = req.query;
  if (!fnr) {
    return Mock.manglerParamFnr(req, res);
  }
  if (fnr.length !== 11) {
    return Mock.badRequestParam(req, res, 'Fnr må ha 11 siffer');
  }
  const { moduleName } = Katalog.pathnameMap.personer;
  const mockpathObject = {
    pathname: 'fnr-:fnrdnr',
    params: { fnrdnr: fnr },
  };
  return SchemaValidator.get(moduleName, req, res, mockpathObject);
};
