const express = require('express');
const shopRoutes = require('./routes/shop');
const commentRoutes = require('./routes/comments');
const userRoute = require('./routes/userRoute');
const addressRoute = require('./routes/addressRoute');
const productRoutes = require('./routes/products');
const paymentRoute = require('./routes/paymentRoute');
const orderRoutes = require('./routes/order-routes');
const cartRoutes = require('./routes/cartRoute');
const User = require('./models/user');
const session = require('express-session') 



const app = express();
app.use(express.json());


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});


app.use(
  session({
    secret: 'greenKart secretKey',
    resave: false,
    saveUninitialized: true,
  })
);


app.use(shopRoutes);
app.use(commentRoutes);
app.use(productRoutes);
app.use("/orders", orderRoutes)
app.use("/cart", cartRoutes)
app.use(userRoute);
app.use(addressRoute);
app.use(paymentRoute);
module.exports = app