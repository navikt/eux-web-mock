const arbeidsgivere = require('../mock_data/arbeidsgivere');

module.exports.arbeidsgivere = (req, res) => {
  res.json(arbeidsgivere);
};
