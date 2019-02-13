const _ = require('underscore');

const Institusjoner = require('./institusjoner');
const landkoder = [
  {
    kode: 'CH',
    term: 'Sveits',
  },
  {
    kode: 'BE',
    term: 'Belgia',
  },
  {
    kode: 'BG',
    term: 'Bulgaria',
  },
  {
    kode: 'DK',
    term: 'Danmark',
  },
  {
    kode: 'EE',
    term: 'Estland',
  },
  {
    kode: 'FI',
    term: 'Finland',
  },
  {
    kode: 'FR',
    term: 'Frankrike',
  },
  {
    kode: 'GR',
    term: 'Hellas',
  },
  {
    kode: 'IE',
    term: 'Irland',
  },
  {
    kode: 'IS',
    term: 'Island',
  },
  {
    kode: 'IT',
    term: 'Italia',
  },
  {
    kode: 'HR',
    term: 'Kroatia',
  },
  {
    kode: 'CY',
    term: 'Kypros',
  },
  {
    kode: 'LV',
    term: 'Latvia',
  },
  {
    kode: 'LI',
    term: 'Liechtenstein',
  },
  {
    kode: 'LT',
    term: 'Litauen',
  },
  {
    kode: 'LU',
    term: 'Luxembourg',
  },
  {
    kode: 'MT',
    term: 'Malta',
  },
  {
    kode: 'NL',
    term: 'Nederland',
  },
  {
    kode: 'NO',
    term: 'Norge',
  },
  {
    kode: 'PL',
    term: 'Polen',
  },
  {
    kode: 'PT',
    term: 'Portugal',
  },
  {
    kode: 'RO',
    term: 'Romania',
  },
  {
    kode: 'SK',
    term: 'Slovakia',
  },
  {
    kode: 'SI',
    term: 'Slovenia',
  },
  {
    kode: 'ES',
    term: 'Spania',
  },
  {
    kode: 'GB',
    term: 'Storbritannia',
  },
  {
    kode: 'SE',
    term: 'Sverige',
  },
  {
    kode: 'DE',
    term: 'Tyskland',
  },
  {
    kode: 'HU',
    term: 'Ungarn',
  },
  {
    kode: 'AT',
    term: 'Østerrike',
  },
];

const filtrerteLandKoder = buctype => {
  const institusjoner = Institusjoner.lesInstitusjoner(buctype);
  const land_med_institusjoner = _.uniq(_.map(institusjoner, 'landkode')).sort();
  return _.filter(landkoder, (land) => _.contains(land_med_institusjoner, land.kode));
};

const strcmpAscending = (a, b) => (a.term > b.term ? 1 : b.term > a.term ? -1 : 0);
//const lkoder = filtrerteLandKoder('FB_BUC_01');
//console.log(lkoder.sort((a,b) => strcmpAscending(a,b)));

module.exports.hent = (req, res) => {
  const buctype = req.params.buctype;
  const landkoder = filtrerteLandKoder(buctype);
  res.json(landkoder.sort((a,b) => strcmpAscending(a,b)));
};
