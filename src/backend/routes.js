const express = require('express');
const router = express.Router();
const { getGame, submitGuess } = require('./controllers');

// Маршрут для получения игры
router.get('/game', getGame);

// Маршрут для отправки предположения
router.post('/guess', submitGuess);

module.exports = router;
