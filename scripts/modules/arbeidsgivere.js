const arbeidsgivere = require('../mock_data/arbeidsgivere');

module.exports.hent = (req, res) => {
  const fnr = req.params.fnr;
  console.log('/arbeidsgivere/:fnr', fnr);
  res.json(arbeidsgivere);
};
