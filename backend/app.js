var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');  // Stellen Sie sicher, dass dies der korrekte Pfad ist
var productsRouter = require('./routes/products');  // Stellen Sie sicher, dass dies der korrekte Pfad ist

const { connectDB } = require('./src/db/util.service.db');
connectDB();

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', usersRouter);  // Verwenden Sie den korrekten Router
app.use('/products', productsRouter);  // Verwenden Sie den korrekten Router

module.exports = app;
