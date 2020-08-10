const _ = require('lodash');

const Mock = require('../utils/mock-util');

/**
 * hent
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
module.exports.hent = async (req, res) => {
  try {
      const saksnummer = [{ label: 'bar', value: 'bar' }]
    res.json(saksnummer);
  } catch (err) {
    Mock.serverError(req, res, err);
  }
};
