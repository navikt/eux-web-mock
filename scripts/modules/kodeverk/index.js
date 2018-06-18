const { landkoder } = require('./landkoder');
const { sector } = require('./sector');
const { sedtyper } = require('./sedtyper');
const { buctyper } = require('./buctyper');
const { institusjon } = require('./institusjon');

const kodeverk = {
  institusjon,
  landkoder,
  sector,
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
