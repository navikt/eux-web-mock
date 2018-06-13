const ERR = require('./errors');
const { Kodeverk } = require('./kodeverk');

exports.send = (req, res) => {
  const body = req.body;
  const jsonBody = utils.isJSON(body) ? JSON.parse(body) : body;
  return res.json(jsonBody);
};

exports.landkoder = (req, res) => {
  return res.json(Kodeverk.landkoder);
};

exports.buctyper = (req, res) => {
  const landkoder = Kodeverk.landkoder.reduce((acc, curr) => {acc.push(curr.kode); return acc}, []);
  const landkode = req.query.landkode;
  if (landkoder.includes(landkode)) {
    const buc_koder = Kodeverk.buctyper.reduce((acc, curr) => {acc.push(curr.kode); return acc}, []);
    return res.json(buc_koder);
  }
  const message = ERR.notFound404(req.url, 'Ugyldig landkode: '+ landkode)
  return res.status(404).send(message);
};

exports.sedtyper = (req, res) => {
  const buctyper = Kodeverk.buctyper.reduce((acc, curr) => {acc.push(curr.kode); return acc}, []);
  const buctype = req.query.buctype;
  console.log(buctype);
  if (buctyper.includes(buctype)) {
    const sedkoder = Kodeverk.sedtyper.reduce((acc, curr) => {acc.push(curr.kode); return acc}, []);
    return res.json(sedkoder);
  }
  const message = ERR.notFound404(req.url, 'Ugyldig buctype: ' + buctype);
  return res.status(404).send(message);
};

exports.institusjoner = (req, res) => {
  // TODO: const landkode = req.query.landkode;
  const instutisjoner = [{
    kode: '119876543211',
    term: 'Svensk skattemyndighet'
  },{
    kode: '119876543211',
    term: 'Svensk trygdemyndighet'
  }];

  return res.json(instutisjoner);
};
