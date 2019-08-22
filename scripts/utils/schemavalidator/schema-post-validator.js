const Mock = require('../mock-util');
const Utils = require('../utils');

const { valideringFeil, test } = require('./helper');

const jsBody = (body) => (Utils.isJSON(body) ? JSON.parse(body) : body);

module.exports.post = (moduleName, req, res, customResponse = null) => {
  const schemaNavn = `${moduleName}-post-schema.json`;
  const label = `${moduleName}:send`;

  try {
    const valid = test(label, schemaNavn, jsBody);
    if (!valid) {
      return valideringFeil(req, res);
    }
    if (customResponse) {
      const response = jsBody(customResponse);
      return res.json(response);
    }
    const { body } = req;
    const response = jsBody(body);
    return res.json(response);
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
