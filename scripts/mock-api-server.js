const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const Serverinfo = require('./utils/server-info');
const logging = require('./utils/logging');
const Saksbehandler = require('./modules/saksbehandler');
const Personer = require('./modules/personer');
//TODO const Rina = require('./modules/rina');
const Institusjoner = require('./modules/institusjoner');
const Fagsaker = require('./modules/fagsaker');
const Arbeidsforhold = require('./modules/arbeidsforhold');
//TODO const Landkoder = require('./modules/landkoder');

const createLogDirIfnotExists = (dir) => !fs.existsSync(dir) && fs.mkdirSync(dir);
const LOGDIR = `${process.cwd()}/logdir`;
createLogDirIfnotExists(LOGDIR);

const MOCK_LOG_FILE = `${LOGDIR}/mock-errors.log`;
const WEB_MOCK_LOG_FILE = `${LOGDIR}/web-mock-errors.log`;
const log4js = require('log4js');
log4js.configure({
  appenders: {
    mock: { type: 'file', filename: MOCK_LOG_FILE, maxLogSize: 10485760, backups: 3, compress: true },
    webmock: { type: 'file', filename: WEB_MOCK_LOG_FILE, maxLogSize: 10485760, backups: 3, compress: true }
  },
  categories: { default: { appenders: ['mock','webmock'], level: 'debug' } }
});
const app = express();

const allowCrossDomain = (req, res, next)  => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.raw());

const port = process.env.PORT || 3002;
const router = express.Router();

router.get('/serverinfo', Serverinfo.hentServerInfo);
// router.post('/logger/trace', logging.trace);
// router.post('/logger/debug', logging.debug);
router.post('/logger/info', logging.info);
router.post('/logger/warn', logging.warn);
router.post('/logger/error', logging.error);


/**
 * ARBEIDSFORHOLD
 */
router.get('/arbeidsforhold/:fnr', Arbeidsforhold.hent);
//TODO router.get('/landkoder/:buctype', Landkoder.hent);
/**
 * SAKSBEHANDLER
 */
router.get('/saksbehandler', Saksbehandler.hent);

/**
 * PERSON
 * ---------------------------------------------------------------
 */
router.get('/personer', Personer.hent);
// TODO router.get('/personer/andre', Personer.hentAndre);

router.get('/institusjoner/:buctype/', Institusjoner.hent);

router.get('/fagsaker/:fnr/', Fagsaker.saksliste);
/**
 * RINA
 */
//TODO router.post('/rina/sak', Rina.sendSak);
//TODO router.post('/rina/vedlegg', Rina.sendVedlegg);
// ?rinasaksnummer=12334566
//TODO router.get('/rina/dokumenter/', Rina.hentDokument);
/*
//Kun tall
rinasaksnummer = 161007 => {
kode: SED_F001,
rinadokumentID: 760c632d67da4bc, // UUID
},
rinasaksnummer = 268016 => [{}],

router.get('/rina/dokumenter/?rinasaksnummer', Rinasak.hent);
[{
  kode: 'SED_F001',
  rinadokumentID: 760c632d67da4bc, // UUID
}]
=
 */
app.use(allowCrossDomain);
app.use('/api', router);

app.listen(port);
console.log('Test EUX mock API server running on http://'+Serverinfo.getIpAdress()+':' + port+'/api');
