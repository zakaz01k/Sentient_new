const connectDB = require('./db');

// Функция для получения игры
const getGame = async (req, res) => {
  try {
    const db = await connectDB();
    // Ваш код для генерации случайного слова
    const randomWord = 'апельсин'; // Пример случайного слова, нужно заменить на генерацию
    res.json({ word: randomWord });
  } catch (error) {
    console.error('Failed to get game', error);
    res.status(500).json({ error: 'Failed to get game' });
  }
};

// Функция для обработки предположения игрока
const submitGuess = async (req, res) => {
  try {
    const { guess } = req.body;
    const db = await connectDB();
    const randomWord = 'апельсин'; // Пример загаданного слова, нужно заменить на получение из базы данных
    // Ваш код для сравнения предположения игрока и загаданного слова и возврата фидбэка
    const feedback = calculateFeedback(guess, randomWord); // Пример функции для расчета фидбэка, нужно заменить на свою логику
    res.json({ feedback });
  } catch (error) {
    console.error('Failed to submit guess', error);
    res.status(500).json({ error: 'Failed to submit guess' });
  }
};

module.exports = { getGame, submitGuess };
