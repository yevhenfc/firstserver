'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Heroes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      realName: {
        type: Sequelize.STRING
      },
      originDescription: {
        type: Sequelize.STRING
      },
      catchPhrase: {
        type: Sequelize.STRING
      },
      images: {
        type: Sequelize.ARRAY(Sequelize.STRING)
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
    await queryInterface.dropTable('Heroes');
  }
};