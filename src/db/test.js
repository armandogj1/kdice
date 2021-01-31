const { updateMain, addMainWord, getWord } = require('./models/country.js');

// updateMain({
//   word: 'niño',
//   country: 'argentina',
//   slang: 'pibe',
// }).then((res) => console.log(res));

updateMain({
  word: 'amigo',
  country: 'colombia',
  slang: 'parce',
}).then((res) => console.log(res));

// getWord({
//   country: 'colombia',
//   word: 'pelao',
//   toCountry: 'argentina',
// }).then((result) => console.log('here is the result', result));
