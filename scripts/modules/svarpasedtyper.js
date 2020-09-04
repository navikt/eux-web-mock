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
    const saksnummer = [
      {
        documentId: '0cbbc234c6dc491fa37e8341ff83c274',
        documentType: 'F001',
        operation: 'Create',
      },
      {
        documentId: '0cbbc234c6dc491fa37e8341ff83c275',
        documentType: 'X005',
        operation: 'Create',
      },
      {
        documentId: '197535c3af974feb9b4f13437e8d1a89',
        documentType: 'X008',
        operation: 'Create',
      },
      {
        documentId: '4d6febdf32be45e097e9b6e5f951a1c8',
        documentType: 'H001',
        operation: 'Create',
      },
      {
        documentId: '9363eb121e8b4ea8b75dade492ceca29',
        documentType: 'X007',
        operation: 'Create',
      },
      {
        documentId: 'd9d8898785f14130be35b7924a070422',
        documentType: 'X009',
        operation: 'Create',
      }
    ]
    res.json(saksnummer);
  } catch (err) {
    Mock.serverError(req, res, err);
  }
};
