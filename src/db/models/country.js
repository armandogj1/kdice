const { Country, Main } = require('../schema.js');

module.exports = {
  getWord: ({ country, word, toCountry }) => {
    return Country.findOne({ name: country })
      .exec()
      .then((result) => {
        if (!result) {
          throw 'No Record';
        }

        const genericWord = result.words.get(word);
        if (!genericWord) {
          console.log('there is no word', genericWord);
          throw 'No Word';
        }
        return Main.findOne({ word: genericWord }).exec();
      })
      .then((translations) => {
        const data = {};
        data.to = translations.slangs.get(toCountry);
        data.word = translations.word;
        return data;
      })
      .catch((err) => {
        throw new Error(err);
      });
  },
  addWord: ({ country, word, generic }) => {
    return Country.findOne({ name: country })
      .exec()
      .then((result) => {
        console.log(result);
        result.words.set(word, generic);
        return result;
      })
      .then((result) => result.save())
      .catch((err) => {
        console.log(err);
        throw new Error('Error Saving Word');
      });
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
