
module.exports.hent = async (req, res) => {
  try {
    const newDate = new Date(new Date().getTime() + Math.ceil(Math.random() * 60 * 60 * 1000))
    const utgaarDato = {
      utgaarDato: newDate,
    };
    res.json(utgaarDato);
  } catch (err) {
    Mock.serverError(req, res, err);
  }
};
