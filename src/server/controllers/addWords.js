const { addWord } = require('../../db/models/country.js');

module.exports = (req, res) => {
  addWord(req.body)
    .then((data) => {
      res.status(201);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404);
      res.send('No data for inputs');
    });
};
