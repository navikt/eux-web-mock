const fs = require('fs');
const MOCK_DATA_DIR = `${process.cwd()}/scripts/mock_data`;
const Kodeverk = require('./kodeverk/landkoder');

exports.send = (req, res) => {
  return res.json({});
};
exports.landkoder = (req, res) => {
  return res.json(Kodeverk.landkoder);
};

exports.bucktyper = (req, res) => {
  const landkode = req.query.landkode;
  console.log('landkode',landkode);
  const land = Kodeverk.landkoder.find((elem) => elem.kode === landkode);
  console.log('land', land);
  return res.json(land);
};

exports.sedtyper = (req, res) => {
  const bucktype = req.query.bucktype;
  console.log('bucktype',bucktype);

  return res.json({});
};

exports.institusjoner = (req, res) => {
  const landkode = req.query.landkode;
  console.log('landkode',landkode);

  return res.json({});
};
