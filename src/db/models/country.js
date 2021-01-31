const { Country, Main } = require('../schema.js');

module.exports = {
  getWord: ({ country, word, toCountry }) => {
    return Country.findOne({ name: country })
      .exec()
      .then((result) => {
        const genericWord = result.words.get(word);

        if (!genericWord) {
          throw 'No Word';
        }
        return Main.find({ word: genericWord }).exec();
      })
      .then((translations) => {
        return translations.slangs.get(toCountry);
      })
      .catch((err) => {
        return console.log(err);
      });
  },
  addWord: ({ country, word, generic }) => {
    return Country.find({ name: country })
      .exec()
      .then((result) => {
        result.words.set(word, generic);
        return result;
      })
      .then((result) => result.save())
      .catch((err) => console.log(err));
  },
  addCountry: ({ country }) => {
    return Country.create({ name: country, words: {} })
      .then((record) => console.log('created', record))
      .catch((err) => console(err));
  },
  addMainWord: ({ word, country, slang }) => {
    return Main.create({ word: word, slangs: {} })
      .then((record) => {
        console.log('this is in addMain', record);
        record.slangs.set(country, slang);
        return record;
      })
      .then((rec) => rec.save())
      .catch((err) => console.log('this is error', err));
  },
  updateMain: ({ word, country, slang }) => {
    return Main.findOne({ word: word })
      .exec()
      .then((record) => {
        record.slangs.set(country, slang);
        return record.save();
      })
      .catch((err) => console.log(err));
  },
};
