const _ = require('underscore');

const institusjoner = require('../mock_data/institusjoner');

module.exports.hent = (req, res) => {
  const buctype = req.params.buctype;
  const landkode = req.query.landkode;
  if (landkode) {
    const iis = _.filter(institusjoner, (item) => {
      return item.landkode === landkode;
    });
    res.json(iis);
    return;
  }
  res.json(institusjoner);
}
