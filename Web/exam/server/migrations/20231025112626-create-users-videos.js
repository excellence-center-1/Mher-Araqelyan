'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users_videos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      u_id: {
        type: Sequelize.INTEGER
      },
      v_id: {
        type: Sequelize.INTEGER
      },
    
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users_videos');
  }
};