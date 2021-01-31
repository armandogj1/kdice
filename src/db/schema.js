const mongoose = require('mongoose');
const db = require('./index.js');
const { Schema } = mongoose;

const countrySchema = new Schema({
  name: String,
  words: {
    type: Map,
    of: String,
  },
});

const mainSchema = new Schema({
  word: String,
  slangs: {
    type: Map,
    of: String,
  },
});

const Country = mongoose.model('Country', countrySchema);
const Main = mongoose.model('Main', mainSchema);

module.exports = { Country, Main };
