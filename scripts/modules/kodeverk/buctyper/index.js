const { awod } = require('./awod');
const { administrative } = require('./administrative');
const { family } = require('./family');
const { horizontal } = require('./horizontal');
const { legislation } = require('./legislation');
const { miscellaneous } = require('./miscellaneous');
const { pensions } = require('./pensions');
const { recovery } = require('./recovery');
const { sickness } = require('./sickness');
const { unemployment } = require('./unemployment');


// exports.buctyper = [].concat(awod, administrative, family, horizontal, legislation, miscellaneous, pensions, recovery, sickness, unemployment);
exports.buctyper = {
  awod, administrative, family, horizontal, legislation, miscellaneous, pensions, recovery, sickness, unemployment,
};
