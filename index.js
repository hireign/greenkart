const http = require('http');
const express = require('express');
const path = require('path');


const app = require('./server/app')
app.use(express.static(path.join(__dirname, 'build')));
app.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build/index.html'))
})

const port = process.env.PORT || 4000;
const server = http.createServer(app)

server.listen(port, ()=> {
    console.log(`App is running on port ${port}`);
}) 