module.exports = (req, res, next) => {
  const { country, word, toCountry } = req.query;

  if (!country || !word || !toCountry) {
    res.status(404);
    res.send('Please provide proper query params');
  } else {
    next();
  }
};
