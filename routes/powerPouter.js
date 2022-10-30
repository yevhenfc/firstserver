const {Router} = require('express');
const {powerController} = require('../controllers')

const powerRouter = Router();

powerRouter.get('/', powerController.getPowers);

module.exports = powerRouter;