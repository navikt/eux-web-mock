const { landkoder } = require('./landkoder');
const { sector } = require('./sector');
const { kodemaps } = require('./kodemaps');
const { sedtyper } = require('./sedtyper');
const { buctyper } = require('./buctyper');
const { institusjoner } = require('./institusjoner');
const { familierelasjoner } = require('./familierelasjoner');

const kodeverk = {
  familierelasjoner,
  landkoder,
  sector,
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
