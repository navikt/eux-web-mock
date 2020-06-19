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
    const ehnet = [{ enhetId: '123', navn: 'enhet123' }, { enhetId: '456', navn: 'enhet456' }]
    res.json(ehnet);
  } catch (err) {
    Mock.serverError(req, res, err);
  }
};
