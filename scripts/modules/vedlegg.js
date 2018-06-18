const utils = require('./utils');
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
};
