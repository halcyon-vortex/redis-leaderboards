var router = require('express').Router();

router.use('/trending', require('./trending/trendingRoutes'));
// router.use('/local_graph', require('./local_graph/localGraphRoutes'));

module.exports = router;