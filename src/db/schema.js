const mongoose = require('mongoose');
const { Schema } = mongoose;

const countrySchema = new Schema({
  name: String,
  words: {
    type: Map,
    of: String,
  },
});

const Country = mongoose.model('Country', countrySchema);

module.export = Country;
