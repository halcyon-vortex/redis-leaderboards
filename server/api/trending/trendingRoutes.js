var router = require('express').Router();
var logger = require('../../util/logger');
var controller = require('./trendingController');

router.route('/')
    .get(controller.getTrending);


module.exports = router;