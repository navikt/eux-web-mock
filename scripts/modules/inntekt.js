const Mock = require('../utils/mock-util');

/**
 * hent
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
module.exports.hent = async (req, res) => {
  try {
    const reply = [{
      fraDato: '2016-01',
      tilDato: '2019-09',
      beloep: 359753,
      type: 'LOENNSINNTEKT',
    }, {
      fraDato: '2017-12',
      tilDato: '2019-05',
      beloep: 25000050000,
      type: 'YTELSE_FRA_OFFENTLIGE',
    }];
    res.json(reply);
  } catch (err) {
    Mock.serverError(req, res, err);
  }
};
