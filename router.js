const {Router} = require('express');

const {heroRouter, powerRouter} = require('./routes');

const router = Router();

router.use('/heroes', heroRouter);
router.use('/powers', powerRouter);

module.exports = router;