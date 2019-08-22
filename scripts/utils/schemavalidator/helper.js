const colors = require('colors/safe');
const emoji = require('node-emoji');
const Schema = require('../schema-util');
const ERR = require('../errors');
const SchemaUtil = require('../schema-util');

const valideringFeil = (req, res) => {
  const status = 400;
  const melding = ERR.errorMessage(400, 'Bad Request', 'Invalid schema', req.originalUrl);
  res.status(status).send(melding);
};
module.exports.valideringFeil = valideringFeil;

const test = (label, schemaNavn, data) => {
  if (!label) {
    console.log(colors.bgYellow('schema:test, mangler label'));
    return false;
  }
  if (!schemaNavn) {
    console.log(colors.bgYellow('schema:test, mangler schemaNavn'));
    return false;
  }
  const validate = Schema.schemaValidator(schemaNavn);
  const valid = validate(data);

  if (valid) {
    console.log(emoji.get('white_check_mark'), `[POST] ${label}`);
  } else {
    console.dir(validate.errors);
    const errmsgs = SchemaUtil.humanReadableErrors(validate.errors);
    console.log(emoji.get('x'), `${label}`, colors.bgRed('Invalid post.body:'));
    errmsgs.forEach((msg) => { console.log(' ', msg); });
  }
  return valid;
};
module.exports.test = test;
