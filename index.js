const http = require('http');
const express = require('express');
const path = require('path');


const app = require('./server/app')
app.use(express.static(path.join(__dirname, 'build')));


const port = process.env.PORT || 4000;
const server = http.createServer(app)

server.listen(port, ()=> {
    console.log(`App is running on port ${port}`);
}) 