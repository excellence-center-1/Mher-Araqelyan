'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
       
      await queryInterface.bulkInsert('subscriptions', [{
        name: 'short word',
        createdAt:  Sequelize.fn('now'),
        updatedAt:  Sequelize.fn('now')
      },
      {
        name: '1 character',
        createdAt:  Sequelize.fn('now'),
        updatedAt:  Sequelize.fn('now')
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('subscription', null, {});
     
  }
};
