const express = require('express');
const bodyParser = require('body-parser');

const Serverinfo = require('./modules/server-info');
const Kodeverk = require('./modules/kodeverk');
const Saksbehandler = require('./modules/saksbehandler');
const Vedlegg = require('./modules/vedlegg');
const Personer = require('./modules/personer');
const Rina = require('./modules/rina');

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
 * SAKSBEHANDLER
 */
router.get('/saksbehandler', Saksbehandler.hent);
/**
 * VEDLEGG
 */
router.post('/vedlegg', Vedlegg.send);
// /vedlegg/ => /rina/vedlegg
/*
body = {
journalpostID,
dokumentID
saksnummer => rinasaknummer,
sedtype => sedID


 */
/**
 * PERSON
 * ---------------------------------------------------------------
 */
router.get('/personer', Personer.hent);

/**
 * KODEVERK
 */
router.get('/kodeverk', Kodeverk.hent);

/**
 * RINA
 */
router.post('/eusak', Rina.send); // TODO
router.post('/rina/sak', Rina.send);
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
