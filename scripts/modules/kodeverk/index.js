const { institusjoner } = require('./institusjoner');
const { landkoder } = require('./landkoder');
const { sektor } = require('./sektor');
const { kodemaps } = require('./kodemaps');
const { sedtyper } = require('./sedtyper');
const { buctyper } = require('./buctyper');
const { familierelasjoner } = require('./familierelasjoner');
const { kjoenn } = require('./kjoenn');

const kodeverk = {
  kjoenn,
  familierelasjoner,
  institusjoner,
  landkoder,
  sektor,
  kodemaps,
  sedtyper,
  buctyper,
};
module.exports.Kodeverk = kodeverk;

/**
 * Hent kodeverk
 * @param req
 * @param res
 */
module.exports.hent = (req, res) => {
  const kode = req.params.kode;
  if (kode) {
    res.json(kodeverk[kode]);
    return;
  }
  res.json(kodeverk);
};
