const utils = require('./utils');

exports.sendSak = (req, res) => {
  const response = {
    rinasaksnummer: '320025',
  };
  return res.json(response);
};

exports.sendVedlegg = (req, res) => {
  const response = {
    vedleggID: '4ba46d7c7ef94f0e85cd0e4fae98da7d',
  };
  return res.json(response);
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
