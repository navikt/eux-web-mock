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

  try {
    let jsonBody = utils.isJSON(body) ? JSON.parse(body) : body;
    console.log('send:', jsonBody);
    switch (jsonBody.journalpostID) {
      case "999":
        console.log("send: Simulated status 500 on journalpostID == 999");
        return res.status(500).send(ERR.serverError500(req.urll));
      case "888":
        console.log("send: Simulated status 401 on journalpostID == 888");
        return res.status(401).send(ERR.unauthorizedRequest401(req.url));
      case "777":
        console.log("send: Simulated status 400 on journalpostID == 777");
        return res.status(400).send(ERR.badRequest400(req.url));
      default:
        const response = {};
        console.log("send: return response= {}");
        res.json(response);
    }
  }
  catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
