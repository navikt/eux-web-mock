// const utils = require('./utils');
// const ERR = require('./errors');

module.exports.sendSak = (req, res) => {
  setTimeout(() => {
    const response = {
      rinasaksnummer: '320025',
      // url: 'http://e34apvw004.devillo.no/portal/#/caseManagement/121788?openMode=Read&docId=0ce5ba58d9b846159feaa257575dae02'
      url: 'http://www.nav.no',
    };
    return res.json(response);
  }, 3000);
  /*
  setTimeout(() => {
    const melding = ERR.serverError500('/rina/sak');
    return res.status(500).send(melding);
  }, 5000);
  */
};

module.exports.sendVedlegg = (req, res) => {
  setTimeout(() => {
    const response = {
      vedleggID: '4ba46d7c7ef94f0e85cd0e4fae98da7d',
      // url: 'http://e34apvw004.devillo.no/portal/#/caseManagement/121788'
      url: 'http://www.nav.no',
    };
    return res.json(response);
  }, 3000);
};

module.exports.hentDokument = (req, res) => {
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
