const arbeidsgivere = require('../mock_data/arbeidsgivere');

module.exports.hent = (req, res) => {
  res.json(arbeidsgivere);
};
