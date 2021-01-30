const mongoose = require('mongoose');
!process.env.PROD && require('dotenv').config();
const DBURI = process.env.DBURI;

mongoose.connect(DBURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connection with db successful!');
});

module.export = db;
