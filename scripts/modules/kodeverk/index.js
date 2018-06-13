const { landkoder } = require('./landkoder');
const { sedtyper } = require('./sedtyper');
const { buctyper } = require('./buctyper');

const kodeverk = {
  landkoder,
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
