const express = require('express');
const bodyParser = require('body-parser');

const Serverinfo = require('./modules/server-info');
const Kodeverk = require('./modules/kodeverk');
const Saksbehandler = require('./modules/saksbehandler');
const Vedlegg = require('./modules/vedlegg');
const Personer = require('./modules/personer');
const Rinasak = require('./modules/rinasak');

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

/**
 * PERSON
 * ---------------------------------------------------------------
 */
router.get('/personer', Personer.hent);

/**
 * KODEVERK
 */
router.get('/kodeverk', Kodeverk.hent);

router.post('/rinasak', Rinasak.send);
/**
 * Opprett sak
 */

app.use(allowCrossDomain);
app.use('/api', router);

app.listen(port);
console.log('Test EUX mock API server running on http://'+Serverinfo.getIpAdress()+':' + port+'/api');
