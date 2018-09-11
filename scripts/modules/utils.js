const URL = require('url');
const assert = require('assert');

module.exports.isJSON = (str) => {
  try {
    return (JSON.parse(str) && !!str);
  } catch (e) {
    return false;
  }
};
module.exports.getURIpath = (req) => {
  const url = URL.parse(req.url);
  assert.ok(url);
  return `/api${url.path}`;
};
