const {Hero, Power, sequelize} = require('../db/models');
const createError = require('http-errors');

// module.exports.getAllHeroes = 
// async(req, res, next) => {
//     try {
//         const foundHeroes = await Hero.findAll({
//             attributes: {
//                 exclude: ['createdAt', 'updatedAt']
//             }
//         });
//     } catch(err){
//         next(err);
//     }
// };
module.exports.getAllHeroes = 
async(req, res, next) => {
    try {
        const foundHeroes = await Hero.findAll({
            attributes: {exclude: ['createdAt', 'updatedAt']},
            include: {
                model: 'Power',
                attributes: {exclude: ['createdAt', 'updatedAt']},
            },
            through: {attributes: []},
        });
        const sendHeros= {};
        foundHeroes.forEach(hero => {
            sendHeros[hero.id] = hero;
            sendHeros[hero.id].superpowers = [];
        });
        foundHeroes.forEach(hero => {
            hero['Powers.id'] && sendHeros[hero.id].superpowers.push(hero['Powers.id']);
            delete hero['Powers.id'];
        });
        res.status(200).send({data: Object.values(sendHeros)});
    } catch(err){
        next(err);
    }
};


module.exports.getHeroById = 
async(req, res, next) => {
    try {
        const foundHero = await Hero.findByPk(id);
        if (foundHero) {
            return res.status(200).send({data: foundHero});
        } 
        next(createError(404, 'The hero not found'));   
    } catch(err){
        next(err);
    }
};

module.exports.deleteHeroById = 
async(req, res, next) => {
    const {params: {heroId}} = req;
    try {
        const deleteHero = await Hero.destroy({
            where: {id: heroId}
        });
        if (deletedHero) return res.status(204).send();
        next(createError(404, 'The hero not found'));
    } catch(err){
        next(err);
    }
};

module.exports.updateHeroById = 
async(req, res, next) => {
    const {body, params: {heroId}} = req;
    try {
        const [updHeroCount, [updHero]] = await Hero.update(body, {
            where: {id: heroId},
            raw: true,
            returning: true,
        });
        if (updHeroCount) {
            return res.status(200).send({data: updHero});
        } 
        next(createError(404, 'The hero not found'));   
    } catch(err){
        next(err);
    }
};

