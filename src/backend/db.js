const { MongoClient } = require('mongodb');

// Адрес подключения к вашей MongoDB
const uri = 'mongodb://localhost:27017/your-database-name';

// Подключение к базе данных
const connectDB = async () => {
  try {
    const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
    console.log('Connected to the database');
    return client.db();
  } catch (error) {
    console.error('Failed to connect to the database', error);
    throw error;
  }
};

module.exports = connectDB;
