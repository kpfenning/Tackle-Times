const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const calendarRoutes = require('./api/calendar');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/calendar', calendarRoutes);

module.exports = router;
