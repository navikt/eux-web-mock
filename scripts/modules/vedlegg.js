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
    console.log('sendToRina:', jsonBody);
    if (jsonBody.journalpostID === "999") {
      const message = "sendToRina: Simulated status 500 on journalpostID === 999";
      console.log(message);
      res.status(500).send(message);
      return;
    }
    if (jsonBody.journalpostID === "888") {
      const message = "sendToRina: Simulated status 401 on journalpostID === 888";
      console.log(message);
      res.status(401).send(message);
      return;
    }
    const response = {};
    res.json(response);
  }
  catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
