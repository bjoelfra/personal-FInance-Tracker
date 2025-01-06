const Transaction = require('../models/Transaction');
const redisClient = require('redis').createClient();

// Fetch all transactions
exports.getTransactions = async (req, res) => {
  redisClient.get('transactions', async (err, data) => {
    if (data) {
      return res.json(JSON.parse(data));
    }

    try {
      const transactions = await Transaction.find();
      redisClient.setex('transactions', 3600, JSON.stringify(transactions));
      res.json(transactions);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
};

// Create a new transaction
exports.createTransaction = async (req, res) => {
  try {
    const newTransaction = new Transaction(req.body);
    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a transaction
exports.updateTransaction = async (req, res) => {
  try {
    const updatedTransaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTransaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a transaction
exports.deleteTransaction = async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Transaction deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
