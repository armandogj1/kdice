const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
// const db = require('../db/index.js');
const router = require('./routes.js');

app.use(express.static(path.resolve(__dirname, '../../dist')));

/*******************
 * Include Router *
 ********************/
app.use('/api', router);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist'));
});

app.listen(PORT, () => {
  console.log('listening on port:', PORT);
});
