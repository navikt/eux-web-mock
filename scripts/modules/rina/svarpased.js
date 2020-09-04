const SchemaValidator = require('../../utils/schemavalidator');
const Katalog = require('../../katalog');

const { moduleName } = Katalog.pathnameMap['rina-sak'];

module.exports.sendSak = (req, res) => {
  setTimeout(() => {
    const response = {
      foo: 'bar',
    };
    return SchemaValidator.post(moduleName, req, res, response);
  }, 3000);
};
