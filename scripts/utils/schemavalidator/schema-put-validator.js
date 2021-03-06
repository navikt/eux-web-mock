const Mock = require('../../utils/mock-util');

module.exports.put204 = async (moduleName, req, res) => {
  try {
    res.status(204).send();
  } catch (err) {
    Mock.serverError(req, res, err);
  }
};
