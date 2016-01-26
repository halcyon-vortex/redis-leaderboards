// var config = require('./server/config/config');
var port = 8000;
var app = require('./server/server');
var logger = require('./server/util/logger');

app.listen(port);
logger.log('listening on http://localhost:' + port);