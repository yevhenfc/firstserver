const {Router} = require('express');
const {heroController} = require('../controllers')

const heroRouter = Router();

heroRouter.route('/').get(heroController.getAllHeroes);

heroRouter.route('/:heroId')
.get(heroController.getHeroById)
.delete(heroController.deleteHeroById)
.patch(heroController.updateHeroById);

module.exports = heroRouter;