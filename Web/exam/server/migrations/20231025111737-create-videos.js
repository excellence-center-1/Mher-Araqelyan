'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('videos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('videos');
  }
};