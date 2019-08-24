const Mock = require('../mock-util');
const Utils = require('../utils');

const { valideringFeil, test } = require('./helper');

const jsBody = (body) => (Utils.isJSON(body) ? JSON.parse(body) : body);
const extractPostBody = (req) => {
  const { body } = req;
  return jsBody(body);
};
module.exports.post = (moduleName, req, res, customResponse = null) => {
  const schemaNavn = `${moduleName}-post-schema.json`;
  const label = `${moduleName}:send`;

  try {
    const postBody = extractPostBody(req);
    const valid = test(label, schemaNavn, postBody);
    if (!valid) {
      return valideringFeil(req, res);
    }
    if (customResponse) {
      const response = jsBody(customResponse);
      return res.json(response);
    }
    return res.json(postBody);
  } catch (err) {
    return Mock.serverError(req, res, err);
  }
};
module.exports.post204 = (moduleName, req, res) => {
  const schemaNavn = `${moduleName}-post-schema.json`;
  const label = `${moduleName}:send`;

  try {
    const { body } = req;
    const response = jsBody(body);
    const valid = test(label, schemaNavn, response);
    if (!valid) {
      return valideringFeil(req, res);
    }
    return res.status(204).json();
  } catch (err) {
    return Mock.serverError(req, res, err);
  }
};

module.exports.postSendPDF = (moduleName, req, res, pdfpath) => {
  const schemaNavn = `${moduleName}-post-schema.json`;
  const label = `${moduleName}:pdf`;
  if (!pdfpath) {
    return Mock.badRequestParam(req, res, 'Mangler pdfpath');
  }
  try {
    const { body } = req;
    const response = jsBody(body);
    const valid = test(label, schemaNavn, response);
    if (!valid) {
      return valideringFeil(req, res);
    }

    res.type('application/pdf');
    return res.sendFile(pdfpath);
  } catch (err) {
    return Mock.serverError(req, res, err);
  }
};
