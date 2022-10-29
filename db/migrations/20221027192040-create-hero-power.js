'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HeroPowers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      heroId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Heroes',
          key: 'id'
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      },
      powerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Powers',
          key: 'id'
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('HeroPowers');
  }
};