const SchemaValidator = require('../../utils/schemavalidator');
const Katalog = require('../../katalog');

const { moduleName } = Katalog.pathnameMap['rina-vedlegg'];

module.exports.sendVedlegg = (req, res) => {
  setTimeout(() => {
    const response = {
      vedleggID: '4ba46d7c7ef94f0e85cd0e4fae98da7d',
      // url: 'http://e34apvw004.devillo.no/portal/#/caseManagement/121788'
      url: 'http://www.nav.no',
    };
    return SchemaValidator.post(moduleName, req, res, response);
  }, 3000);
};
