const arbeidsforhold = require('../mock_data/arbeidsforhold');

module.exports.hent = (req, res) => {
  const fnr = req.params.fnr;
  console.log('/arbeidsforhold/:fnr', fnr);
  res.json(arbeidsforhold);
};
