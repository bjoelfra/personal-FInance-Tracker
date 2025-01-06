const express = require('express');
const { Sequelize } = require('sequelize');
const User = require('./models/user');
const Transaction = require('./models/transaction');
const authRoutes = require('./routes/authRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/transactions', transactionRoutes);

// Synchronize the models
async function syncDb() {
  try {
    await Sequelize.sync({ force: true });
    console.log('Database synchronized');
  } catch (err) {
    console.log('Error syncing database: ', err);
  }
}

syncDb();

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
