const express = require('express');

const path = require('path');

const rootController = require('../controller/expense');

const router = express.Router();

router.get('/',rootController.root);

module.exports = router;
