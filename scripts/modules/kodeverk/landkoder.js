const _ = require('underscore');

// import institusjoner som er knyttet til land
const institusjoner = require('../../mock_data/institusjoner');
// Hent list med unique 'landkode'er => f.eks ['NO', ...]
const land_med_institusjoner = _.uniq(_.map(institusjoner, 'landkode'));
const landkoder = [
  {
    kode: 'AT',
    term: 'Østerrike'
  },
  {
    kode: 'BE',
    term: 'Belgium'
  },
  {
    kode: 'BG',
    term: 'Bulgaria'
  },
  {
    kode: 'HR',
    term: 'Kroatia'
  },
  {
    kode: 'CY',
    term: 'Kypros'
  },
  {
    kode: 'CZ',
    term: 'Tsjekkia'
  },
  {
    kode: 'DK',
    term: 'Danmark'
  },
  {
    kode: 'EE',
    term: 'Estland'
  },
  {
    kode: 'FI',
    term: 'Finland'
  },
  {
    kode: 'FR',
    term: 'Frankrike'
  },
  {
    kode: 'GR',
    term: 'Hellas'
  },
  {
    kode: 'IE',
    term: 'Irland'
  },
  {
    kode: 'IS',
    term: 'Island'
  },
  {
    kode: 'IT',
    term: 'Italia'
  },
  {
    kode: 'LV',
    term: 'Latvia'
  },
  {
    kode: 'NO',
    term: 'Norge'
  },
  {
    kode: 'SE',
    term: 'Sverige'
  },
];
// exporter en liste landkoder som har institusjoner
module.exports.landkoder = _.filter(landkoder, (land) => _.contains(land_med_institusjoner, land.kode));
