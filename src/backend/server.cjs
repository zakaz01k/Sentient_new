const express = require('express');
const app = express();
const routes = require('./routes');

// Парсинг JSON данных
app.use(express.json());

// Использование маршрутов
app.use('/', routes);

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
