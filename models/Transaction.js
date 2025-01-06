// models/Transaction.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(require('../config/config').development);

const Transaction = sequelize.define('Transaction', {
  type: {
    type: DataTypes.STRING,
    enum: ['income', 'expense'],
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
});

module.exports = Transaction;
