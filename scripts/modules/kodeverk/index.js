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
exports.Kodeverk = kodeverk;

/**
 * Hent kodeverk
 * @param req
 * @param res
 */
exports.hent = (req, res) => {
  res.json(kodeverk);
};
