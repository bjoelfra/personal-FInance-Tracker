// routes/transactionRoutes.js
const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const Transaction = require('../models/transaction');
const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
  const { type, amount, description } = req.body;
  try {
    const newTransaction = await Transaction.create({
      userId: req.user,
      type,
      amount,
      description,
    });
    res.status(201).json(newTransaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/', authMiddleware, async (req, res) => {
  try {
    const transactions = await Transaction.findAll({ where: { userId: req.user } });
    res.json(transactions);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

