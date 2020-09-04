
module.exports.hent = async (req, res) => {
  //res.setHeader('Location', 'http://eux-web-mock-url');
  //res.status(302).send();
  res.json({ Location: 'http://eux-web-mock-url' });
};
