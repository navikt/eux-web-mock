const log4js = require('log4js');

const logger = log4js.getLogger('webmock');
const consoleMerge = (loglevel, body) => (
  { loglevel, timestamp: new Date().toISOString(), ...body }
);

const logging = (req, res, level) => {
  const { body } = req;
  const log = consoleMerge(level, body);
  console[level](log);
  logger[level](body);
  return res.status(200).send('OK');
};

module.exports.trace = (req, res) => logging(req, res, 'trace');
module.exports.debug = (req, res) => logging(req, res, 'debug');
module.exports.info = (req, res) => logging(req, res, 'info');
module.exports.warn = (req, res) => logging(req, res, 'warn');
module.exports.error = (req, res) => logging(req, res, 'error');
