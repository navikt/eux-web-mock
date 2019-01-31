const arbeidsforhold = require('../mock_data/arbeidsforhold');

module.exports.ansettelser = (req, res) => {
  res.json(arbeidsforhold);
};
