const fs = require('fs');
const URL = require('url');

const ERR = require('./errors');
const MOCK_DATA_DIR = `${process.cwd()}/scripts/mock_data`;

const lesPerson = (fnr) => {
  const mockfile = `${MOCK_DATA_DIR}/personer/${fnr}.json`;
  return fs.existsSync(mockfile) ? JSON.parse(fs.readFileSync(mockfile, "utf8")) : {};
};

module.exports.hent = (req, res) => {
  const fnr = req.query.fnr;
  if (fnr && fnr.length === 11) {
    const person = lesPerson(fnr);
    return res.json(person);
  }
  let message = '';
  if (!fnr) {
    message = 'Mangler fnr';
  }
  else if (fnr.length !== 9) {
    message = 'Fnr må ha 11 siffer';
  }

  const url = URL.parse(req.url);
  const melding = ERR.badRequest400(url.pathname, message);
  return res.status(400).send(melding);
  /*
  const url = URL.parse(req.url);
  const melding = ERR.serverError500(url.pathname);
  return res.status(500).send(melding);
  */
};

module.exports.hentAndre = (req, res) => {
  const fnr = req.query.fnr;
  if (fnr && fnr.length === 11) {
    const person = lesPerson(fnr);
    const andre = _.pick(person, 'fnr', 'fdato', 'fornavn', 'etternavn', 'kjoenn');
    return res.json(andre);
  }
  let message = '';
  if (!fnr) {
    message = 'Mangler fnr';
  }
  else if (fnr.length !== 9) {
    message = 'Fnr må ha 11 siffer';
  }

  const url = URL.parse(req.url);
  const melding = ERR.badRequest400(url.pathname, message);
  return res.status(400).send(melding);
};
