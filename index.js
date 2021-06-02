var express = require('express');
var app = express();
var morgan = require('morgan');
var user = require('./api/user/index.js');

if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('dev'));
}

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// 라우팅 설정
app.use('/users', user);
app.use('/photo', photo);

// app.listen(3000, function () {
//     console.log(`Example app listening on port 3000!`);
// });

module.exports = app;