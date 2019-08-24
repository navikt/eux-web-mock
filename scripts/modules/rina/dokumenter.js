const Mock = require('../../utils/mock-util');
const SchemaValidator = require('../../utils/schemavalidator');
const Katalog = require('../../katalog');

const { moduleName } = Katalog.pathnameMap['rina-dokumenter'];

module.exports.hentDokument = async (req, res) => {
  const { rinasaksnummer } = req.query;
  if (!rinasaksnummer) return Mock.manglerParamSaksnummer(req, res);

  const pathObject = {
    pathname: 'snr-:rinasaksnummer',
    params: { rinasaksnummer },
  };
  return SchemaValidator.get(moduleName, req, res, pathObject);
};
