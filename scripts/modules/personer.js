const fs = require('fs');
const URL = require('url');
const _ = require('underscore');

const Schema = require('../test/schema-util');
const ERR = require('./errors');
const MOCK_DATA_DIR = `${process.cwd()}/scripts/mock_data`;
const PERSON_MOCK_DATA_DIR = `${MOCK_DATA_DIR}/personer`;
const lesPerson = (fnr) => {
  const mockfile = `${PERSON_MOCK_DATA_DIR}/${fnr}.json`;
  return fs.existsSync(mockfile) ? JSON.parse(fs.readFileSync(mockfile, "utf8")) : {};
};


module.exports.lesPersonKatalog = () => {
  return Schema.lesKatalog(PERSON_MOCK_DATA_DIR);
};

module.exports.hent = (req, res) => {
  const url = URL.parse(req.url);
  const fnr = req.query.fnr;
  if (fnr && fnr.length === 11) {
    const person = lesPerson(fnr);
    if (_.isEmpty(person)) {
      const melding = ERR.notFound404(url.pathname, 'Person med fnr IKKE funnet');
      return res.status(404).send(melding);
    }
    return res.json(person);
  }
  let message = '';
  if (!fnr) {
    message = 'Mangler fnr';
  }
  else if (fnr.length !== 9) {
    message = 'Fnr må ha 11 siffer';
  }

  const melding = ERR.badRequest400(url.pathname, message);
  return res.status(400).send(melding);
  /*
  const url = URL.parse(req.url);
  const melding = ERR.serverError500(url.pathname);
  return res.status(500).send(melding);
  */
};

module.exports.hentAndre = (req, res) => {
  const url = URL.parse(req.url);
  const fnr = req.query.fnr;
  if (fnr && fnr.length === 11) {
    const person = lesPerson(fnr);
    if (_.isEmpty(person)) {
      const melding = ERR.notFound404(url.pathname, 'Person med fnr IKKE funnet');
      return res.status(404).send(melding);
    }
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


  const melding = ERR.badRequest400(url.pathname, message);
  return res.status(400).send(melding);
};
