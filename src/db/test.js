const { updateMain, addMainWord } = require('./models/country.js');

updateMain({
  word: 'niño',
  country: 'argentina',
  slang: 'pibe',
}).then((res) => console.log(res));

// addMainWord({
//   word: 'niño',
//   country: 'colombia',
//   slang: 'pelao',
// }).then((res) => console.log(res));
