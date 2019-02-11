const fs = require('fs');
const _ = require('underscore');

const MOCK_DATA_DIR = `${process.cwd()}/scripts/mock_data`;
const INSTITUSJONER_MOCK_DATA_DIR = `${MOCK_DATA_DIR}/institusjoner`;

const lesInstitusjoner = buctype => {
  const mockfile = `${INSTITUSJONER_MOCK_DATA_DIR}/institusjoner-${buctype.toUpperCase()}.json`;
  return fs.existsSync(mockfile) ? JSON.parse(fs.readFileSync(mockfile, "utf8")) : [];
};
module.exports.lesInstitusjoner = lesInstitusjoner;

module.exports.hent = (req, res) => {
  const buctype = req.params.buctype;
  const landkode = req.query.landkode;
  console.log('Institusjoner', buctype, landkode);
  const institusjoner = lesInstitusjoner(buctype);
  if (landkode) {
    const iis = _.filter(institusjoner, (item) => {
      return item.landkode === landkode;
    });
    res.json(iis);
    return;
  }
  res.json(institusjoner);
};
