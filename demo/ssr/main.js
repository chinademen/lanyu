const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');
const ejs = require('ejs');
// const bodyParser = require('body-parser');
const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.all('*', function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', `${__dirname}/www`);

app.set( 'view engine', 'html' );
app.engine( '.html', ejs.__express );

app.get('/', function(req, res) {
    res.render('index');
});


// app.use('/', require('./router/index'));

http.createServer(app).listen(9000);

console.log("Start Serving Success  >>>  localhost:9000");
