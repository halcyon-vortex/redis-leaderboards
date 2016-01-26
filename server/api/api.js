var router = require('express').Router();

router.use('/daily', require('./daily/dailyRoutes'));
router.use('/weekly', require('./weekly/weeklyRoutes'));
router.use('/monthly', require('./monthly/monthlyRoutes'));

module.exports = router;