'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('levels', [{
      levelname: 'beginner',
      score: 1
     },
   {
       levelname: 'middle',
       score: 5 
   },
   {
       levelname: 'professional',
       score: 8 
   }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('levels', null, {});
  }
};
