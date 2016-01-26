var express = require('express');
var app = express();
var api = require('./api/api');
//var config = require('./config/config');
// db.url is different depending on NODE_ENV
// require('mongoose').connect(config.db.url);
var redis = require('redis');
var client = redis.createClient(); // By default will use 127.0.0.1 and 6379 as the hostname and port respectively


// setup the app middlware
require('./middleware/appMiddleware')(app);

// setup the api
app.use('/api/', api);
// set up global error handling

// export the app for testing
module.exports = app;