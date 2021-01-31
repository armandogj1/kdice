const router = require('express').Router();
const getWord = require('./controllers/getWord.js');
const addWord = require('./controllers/addWords.js');
const queryValidator = require('./middlewares/queryValidator.js');

router.get('/word', queryValidator, getWord);
router.post('/word', addWord);

module.exports = router;
