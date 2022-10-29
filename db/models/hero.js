'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Hero.belongsToMany(models.Power, {through: 'HeroPowers'});
    }
  }
  Hero.init({
    nickName: DataTypes.STRING,
    realName: DataTypes.STRING,
    originDescription: DataTypes.STRING,
    catchPhrase: DataTypes.STRING,
    images: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    sequelize,
    modelName: 'Hero',
    tableName: 'Heroes',
  });
  return Hero;
};