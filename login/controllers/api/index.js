const router = require('express').Router();
const userRoutes = require('./userRoutes');
const teamRoutes = require('./teamRoutes');
const calendarRoutes = require('./calendar');

router.use('/users', userRoutes);
router.use('/teams', teamRoutes);
router.use('/calendar', calendarRoutes);


module.exports = router;
