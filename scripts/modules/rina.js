const fs = require('fs');
const MOCK_DATA_DIR = `${process.cwd()}/scripts/mock_data`;
const Kodeverk = require('./kodeverk/landkoder');

exports.landkoder = (req, res) => {
  return res.json(Kodeverk.landkoder);
};

exports.buckoder = (req, res) => {
  const landkode = req.query.landkode;
  console.log('landkode',landkode);
  const land = Kodeverk.landkoder.find((elem) => elem.kode === landkode);
  console.log('land', land);
  return res.json(land);
};
