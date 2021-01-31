const { getWord } = require('../../db/models/country.js');

module.exports = (req, res) => {
  console.table(req.query);
  getWord(req.query)
    .then((data) => {
      res.status(200);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404);
      res.send('No data for inputs');
    });
};
