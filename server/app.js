const express = require('express');
const cors = require('cors')
require('./db') // Connect DB

const errorHanlingController = require('./controllers/errorHanlingController');
const userRouter = require('./routes/usersRouter');

const app = express();


app.use(express.json());
app.use(cors())

app.use(userRouter.routes);

app.use(errorHanlingController.urlNotFound);
module.exports = app