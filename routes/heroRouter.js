const {Router} = require('express');
const {heroController} = require('../controllers')
const heroRouter = Router();
const {uploadFile} = require('../middleware');

heroRouter
.route('/')
.post(uploadFile.uploadHeroImage, heroController.createNewHero);
.get(heroController.getAllHeroes);

heroRouter.route('/:heroId')
.get(heroController.getHeroById)
.delete(heroController.deleteHeroById)
.patch(heroController.updateHeroById);

module.exports = heroRouter;