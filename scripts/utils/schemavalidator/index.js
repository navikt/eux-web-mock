const { get } = require('./schema-get-validator');
const { post, post204, postSendPDF } = require('./schema-post-validator');
const { put204 } = require('./schema-put-validator');
const { slett } = require('./schema-delete-validator');
const { test, valideringFeil } = require('./helper');

module.exports = {
  get, post, post204, postSendPDF, put204, slett, test, valideringFeil,
};
