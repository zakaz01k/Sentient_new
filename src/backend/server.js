const express = require('express');
const app = express();
const path = require('path');

// Парсинг JSON данных
app.use(express.json());

// Создание объекта для хранения текущей игры
let currentGame = {
  targetWord: 'апельсин', // Загаданное слово
  attempts: 0, // Количество попыток
  history: [], // История попыток игрока
};

// Маршрут для начала новой игры
app.get('/api/game/start', (req, res) => {
  currentGame = {
    targetWord: 'апельсин',
    attempts: 0,
    history: [],
  };
  res.json({ message: 'New game started' });
});

// Маршрут для отправки попытки угадывания слова
app.post('/api/game/guess', (req, res) => {
  const { guess } = req.body; // Получение введенного слова из запроса
  currentGame.attempts++; // Увеличение количества попыток

  // Проверка совпадения введенного слова с загаданным
  if (guess.toLowerCase() === currentGame.targetWord.toLowerCase()) {
    // Слово угадано
    currentGame.history.push({
      guess,
      feedback: 'Correct!',
      attempts: currentGame.attempts,
    });
    res.json({ message: 'You guessed the word!', success: true });
  } else {
    // Слово не угадано
    const distance = getDistance(
      guess.toLowerCase(),
      currentGame.targetWord.toLowerCase()
    );
    currentGame.history.push({
      guess,
      feedback: `Word is ${distance} steps away from the target`,
      attempts: currentGame.attempts,
    });
    res.json({
      message: `Incorrect guess. Word is ${distance} steps away.`,
      success: false,
    });
  }
});

// Вспомогательная функция для расчета расстояния между словами
function getDistance(word1, word2) {
  // Реализация расчета расстояния между словами
  // Можно использовать алгоритмы сравнения слов, например, расстояние Левенштейна
  // Возвращаемое значение - число, показывающее насколько близко слово к загаданному
  return Math.abs(word1.length - word2.length);
}

// Запуск сервера
const PORT = process.env.PORT || 5174;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
