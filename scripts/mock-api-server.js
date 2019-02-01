const express = require('express');
const bodyParser = require('body-parser');

const Serverinfo = require('./modules/server-info');
const Kodeverk = require('./modules/kodeverk');
const Saksbehandler = require('./modules/saksbehandler');
const Personer = require('./modules/personer');
const Rina = require('./modules/rina');
const Institusjoner = require('./modules/institusjoner');
const Fagsaker = require('./modules/fagsaker');
const Arbeidsforhold = require('./modules/arbeidsgivere');

const app = express();

const allowCrossDomain = (req, res, next)  => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.raw());

const port = process.env.PORT || 3002;
const router = express.Router();

/**
 * ARBEIDSFORHOLD
 */
router.get('/arbeidsforhold/:fnr/arbeidsgivere', Arbeidsforhold.arbeidsgivere);
/**
 * SAKSBEHANDLER
 */
router.get('/saksbehandler', Saksbehandler.hent);

/**
 * PERSON
 * ---------------------------------------------------------------
 */
router.get('/personer', Personer.hent);
router.get('/personer/andre', Personer.hentAndre);

/**
 * KODEVERK
 */
router.get('/kodeverk/:kode?', Kodeverk.hent);

router.get('/institusjoner/:buctype?', Institusjoner.hent);

router.get('/fagsaker/:fnr/', Fagsaker.saksliste);
/**
 * RINA
 */
router.post('/rina/sak', Rina.sendSak);
router.post('/rina/vedlegg', Rina.sendVedlegg);
// ?rinasaksnummer=12334566
router.get('/rina/dokumenter/', Rina.hentDokument);
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
