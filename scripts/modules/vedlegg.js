const utils = require('./utils');
//const ERR = require('./errors');
/**
 * Send vedlegg
 * @param req
 * @param res
 * @returns {*}
 */
exports.send = (req, res) => {
  const body = req.body;
  const responseBody = utils.isJSON(body) ? JSON.parse(body) : body;
  return res.json(responseBody);
  /*
  const message = ERR.badRequest400(req.url);
  return res.status(400).send(message);
  */
};
