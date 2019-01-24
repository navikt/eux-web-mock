const _ = require('underscore');
const fagsaker = require('../mock_data/fagsaker');
module.exports.saksliste = (req, res) => {
  const fnr = req.params.fnr;
  const behandlingstema = req.query.behandlingstema;
  console.log(fnr, behandlingstema);
  if (!behandlingstema) {
    res.json(fagsaker);
    return;
  }

  res.json(_.filter(fagsaker, (fagsak) => fagsak.saksid === behandlingstema));
};
