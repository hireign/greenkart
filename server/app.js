

const express = require('express');
const bodyParser = require('body-parser');



const app = express();

const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));


app.use(shopRoutes);


