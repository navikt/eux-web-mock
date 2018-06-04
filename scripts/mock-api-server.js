const express = require('express');
const bodyParser = require('body-parser');

const serverinfo = require('./modules/server-info');
const saksbehandler = require('./modules/saksbehandler');
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
router.get('/saksbehandler', saksbehandler.hent);

app.use(allowCrossDomain);
app.use('/api', router);

app.listen(port);
console.log('Test EUX mock API server running on http://'+serverinfo.getIpAdress()+':' + port+'/api');
