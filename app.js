const express = require('express');

const cors = require('cors');

const bodyParser = require('body-parser');

const path = require('path');

const rootRouter = require('./routes/root');

const expenseRouter = require('./routes/expense');

const expenseDataRouter = require('./routes/expenseData');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(expenseRouter);

app.use(expenseDataRouter);

app.use(expenseDataRouter);

app.use(rootRouter);

app.listen(3000);