/*
const fs = require('fs');
const MOCK_DATA_DIR = `${process.cwd()}/scripts/mock_data`;
*/
const utils = require('./utils');
const ERR = require('./errors');
const happy = require('./happystatus');
/**
 * Send vedlegg
 * @param req
 * @param res
 * @returns {*}
 */
exports.send = (req, res) => {
  const body = req.body;
  const responseBody = utils.isJSON(body) ? JSON.parse(body) : body;

  const status = happy.happyStatus([200, 200, 200, 401, 500]);

  switch (status) {
    case 200:
      return res.json(responseBody);
    case 401: {
      const melding = ERR.unauthorizedRequest401(req.url);
      return res.status(status).send(melding);
    }
    case 500: {
      const melding = ERR.serverError500(req.urll);
      return res.status(status).send(melding);
    }
    default:
      return res.json(responseBody);
  }
};
