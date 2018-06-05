const URL = require('url');
const assert = require('assert');

exports.isJSON = (str) => {
  try {
    return (JSON.parse(str) && !!str);
  } catch (e) {
    return false;
  }
};
exports.getURIpath = (req) => {
  const url = URL.parse(req.url);
  assert.ok(url);
  return `/api${url.path}`;
};
