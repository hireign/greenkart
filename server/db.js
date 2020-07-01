const mongoose = require('mongoose');


let DB_USER = 'tutorial6'
let DB_PASSWORD = 'tutorial6@group22';
let DB_NAME = 'tutorial6'
let URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.slvtt.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("DB Connected");
});