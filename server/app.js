const express = require('express');
const bodyParser = require('body-parser');
const shopRoutes = require('./routes/shop');
const commentRoutes = require('./routes/comments');
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Routes config
app.use(shopRoutes);
app.use(commentRoutes);
app.use(productRoutes);
app.use("/orders", orderRoutes)

module.exports = app