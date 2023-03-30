const express = require('express');

const path = require('path');

const user = require('../model/database');

const expenseRouter = require('../controller/expense');

const router = express.Router();

router.post('/expense',expenseRouter.expense);

module.exports = router;