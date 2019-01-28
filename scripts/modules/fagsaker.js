const fs = require('fs');
const _ = require('underscore');


const MOCK_DATA_DIR = `${process.cwd()}/scripts/mock_data`;
const FAGSAKER_MOCK_DATA_DIR = `${MOCK_DATA_DIR}/fagsaker`;


const lesFagsaker = (fnr, sektor) => {
  const mockfile = `${FAGSAKER_MOCK_DATA_DIR}/${sektor.toLowerCase()}_fagsaker.json`;
  return fs.existsSync(mockfile) ? JSON.parse(fs.readFileSync(mockfile, "utf8")) : {};
};

module.exports.saksliste = (req, res) => {
  const fnr = req.params.fnr;
  const sektor = req.query.sektor;
  const tema = req.query.tema;
  const fagsaker = lesFagsaker(fnr, sektor);

  res.json(_.filter(fagsaker, (fagsak) => fagsak.tema.kode === tema));
};
