const utils = require('./utils');

exports.sendSak = (req, res) => {
  const body = req.body;
  const responseBody = utils.isJSON(body) ? JSON.parse(body) : body;
  return res.json(responseBody);
};

exports.sendVedlegg = (req, res) => {
  const body = req.body;
  const responseBody = utils.isJSON(body) ? JSON.parse(body) : body;
  return res.json(responseBody);
};

exports.hentDokument = (req, res) => {
  const rinasaksnummer = req.query.rinasaksnummer;
  const rinaDokumenter = {
    161007: [{
      kode: 'SED_F001',
      rinadokumentID: '760c632d67da4bc',
      opprettetdato: '2017-08-12T20:17:46.384Z'
    }],
    268016: [],
  };
  const rinadokument = rinaDokumenter[rinasaksnummer] ? rinaDokumenter[rinasaksnummer]: [];
  return res.json(rinadokument);
};
