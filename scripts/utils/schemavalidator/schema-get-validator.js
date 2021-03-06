const Mock = require('../../utils/mock-util');
const Utils = require('../utils');
const { pathObject2Filename } = require('../../utils/pathnames');
const { MOCK_DATA_DIR } = require('../../../mock.config');

module.exports.get = async (moduleName, req, res, pathObject = {}) => {
  try {
    const GET_DIR = `${MOCK_DATA_DIR}/${moduleName}`;
    let mockfile = `${GET_DIR}/${moduleName}.json`;
    if (pathObject.pathname) {
      const filename = pathObject2Filename(pathObject, '-');
      mockfile = `${GET_DIR}/${filename}.json`;
    }
    const data = await Utils.readJsonAndParseAsync(mockfile);
    return await res.json(data);
  } catch (err) {
    return Mock.serverError(req, res, err);
  }
};
