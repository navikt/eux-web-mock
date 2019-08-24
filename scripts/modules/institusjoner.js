const { MOCK_DATA_DIR } = require('../../mock.config');
const Utils = require('../utils/utils');

const INSTITUSJONER_MOCK_DATA_DIR = `${MOCK_DATA_DIR}/institusjoner`;

const lesInstitusjoner = (buctype) => {
  const mockfile = `${INSTITUSJONER_MOCK_DATA_DIR}/institusjoner-${buctype.toUpperCase()}.json`;
  return Utils.readJsonAndParseAsync(mockfile);
};
module.exports.lesInstitusjoner = lesInstitusjoner;

module.exports.hent = async (req, res) => {
  const { buctype } = req.params;
  const { landkode } = req.query;
  const institusjoner = await lesInstitusjoner(buctype);
  if (landkode) {
    const iis = institusjoner.filter((item) => item.landkode === landkode);
    return res.json(iis);
  }
  return res.json(institusjoner);
};
