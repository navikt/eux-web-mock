const EKV = require('eessi-kodeverk');
const Institusjoner = require('./institusjoner');

// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_uniq
const uniq = (array) => [...new Set(array)];
// const sortBy = (key) => (a,b) => (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0);

const filtrerteLandKoder = async (buctype) => {
  const institusjoner = await Institusjoner.lesInstitusjoner(buctype);
  const landMedInstitusjoner = uniq(institusjoner.map((item) => item.landkode)).sort();

  const { landkoder } = EKV.KTObjects;
  // const sorterte_landkoder = landkoder.sort(sortBy('kode'));
  return landkoder.filter((landkode) => landMedInstitusjoner.includes(landkode.kode));
};

module.exports.hent = async (req, res) => {
  const { buctype } = req.params;
  const { landkode } = req.query;
  try {
    const landkoder = await filtrerteLandKoder(buctype);
    if (landkode) {
      const land = landkoder.find((item) => item.kode === landkode);
      if (land) {
        const response = [land];
        return res.json(response);
      }
    }
    return res.json(landkoder);
  } catch (e) {
    return res.status(500).send(e);
  }
};
