const express = require('express');

const user = require('../model/database');

const path = require('path');

const router = express.Router();

const expenseDataRouter = require('../controller/expense');

router.get('/expense-data',expenseDataRouter.expenseData);

router.get('/expense-data/:id',expenseDataRouter.expenseDataId);

module.exports = router;