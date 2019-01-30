const arbeidsforhold = require('../mock_data/arbeidsforhold');

module.exports.hent = (req, res) => {
  const fom = req.query.fom;
  const tom = req.query.tom;
  res.json(arbeidsforhold);
};
