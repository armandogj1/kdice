const { addCountry, addWord } = require('./models/country.js');

// addCountry({
//   country: 'mexico',
// });

// addCountry({ country: 'colombia' });

addWord({ country: 'mexico', word: 'chingon', generic: 'bueno' });
addWord({ country: 'argentina', word: 'pibe', generic: 'niño' });
addWord({ country: 'mexico', word: 'fresa', generic: 'posh' });
addWord({ country: 'mexico', word: 'vato', generic: 'amigo' });
addWord({ country: 'colombia', word: 'parce', generic: 'amigo' });
