const { tema } = require('./tema');
const { buctyper } = require('./buctyper');
const { familierelasjoner } = require('./familierelasjoner');
const { kjoenn } = require('./kjoenn');
const { kodemaps } = require('./kodemaps');
const { sedtyper } = require('./sedtyper');
const { sektor } = require('./sektor');

const kodeverk = {
  tema,
  buctyper,
  familierelasjoner,
  kjoenn,
  kodemaps,
  landkoder,
  sedtyper,
  sektor,
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
