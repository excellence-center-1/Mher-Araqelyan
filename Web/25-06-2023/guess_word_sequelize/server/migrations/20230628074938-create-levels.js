'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('levels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      levelname: {
        type: Sequelize.STRING
      },
      score: {
        type: Sequelize.INTEGER
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('levels');
  }
};