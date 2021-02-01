const { getWord } = require('../../db/models/country.js');

module.exports = (req, res) => {
  console.table(req.query);
  getWord(req.query)
    .then((data) => {
      console.log('this is in cont then', data);
      res.status(200);
      res.send(data);
    })
    .catch((err) => {
      console.log('this is in cont catch', err);
      res.status(404);
      res.send('No data for inputs');
    });
};
