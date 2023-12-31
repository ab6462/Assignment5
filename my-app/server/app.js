var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var cors = require('cors');

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);




require("dotenv").config();

// middleware
const corsOptions = {
    origin: "https://assignment5-frontend-nc7u.onrender.com", // frontend URI (ReactJS)
}
app.use(express.json());
app.use(cors(corsOptions));

// connect MongoDB

mongoose.connect('mongodb+srv://angelali6462:ULpthEwc5aDA51Xy@assignment5.ycdcf52.mongodb.net/items');

// route
app.get("/", (req, res) => {
    res.status(201).json({message: "Connected to Backend!"});
});



module.exports = app;


