var router = require('express').Router();
var logger = require('../../util/logger');
var controller = require('./weeklyController');
var createRoutes = require('../../util/createRoutes');
createRoutes(controller, router);

module.exports = router;