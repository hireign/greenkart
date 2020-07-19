const express = require('express');
const bodyParser = require('body-parser');
const shopRoutes = require('./routes/shop');
const commentRoutes = require('./routes/comments');
const productRoutes = require('./routes/products');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Routes config
app.use(shopRoutes);
app.use(commentRoutes);
// app.use(productRoutes);

app.listen(4000)