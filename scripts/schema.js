const fs = require('fs');
const { demo } = require('./test/demo');
const { kodeverk } = require('./test/kodeverk');
const { person } = require('./test/person');
const { Saksbehandler } = require('./test/saksbehandler');
// const Schema = require('./test/schema-util');


const createLogDirIfnotExists = (dir) => !fs.existsSync(dir) && fs.mkdirSync(dir);
const LOGDIR = `${process.cwd()}/logdir`;
createLogDirIfnotExists(LOGDIR);

const SCHEMA_LOG_FILE = `${LOGDIR}/schema-errors.log`;
const log4js = require('log4js');
log4js.configure({
  appenders: { schema: { type: 'file', filename: SCHEMA_LOG_FILE } },
  categories: { default: { appenders: ['schema'], level: 'error' } }
});

const katalogMap = new Map([
  ['demo', demo],
  ['kodeverk', kodeverk],
  ['personer', person],
  ['saksbehandler', Saksbehandler],
]);

const testAll = () => {
  katalogMap.forEach((katalog) => katalog.testAll());
};
/*
const testOne = path => {
  const katalog = Schema.katalogNavn(path);
  katalogMap.get(katalog).testOne(path);
};
*/
testAll();
console.log('\nSchema validation completed.\n');
