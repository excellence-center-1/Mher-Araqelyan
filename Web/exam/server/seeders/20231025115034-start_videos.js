'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Define the data to be inserted without createdAt and updatedAt
    const data = [
      {
        url: 'https://www.youtube.com/embed/26nsBfLXwSQ?si=AevU_yfRqIKcdW77',
        title: 'Example 1',
        category: 'Rock Music',
      },
      {
        url: 'https://www.youtube.com/embed/DUpxiKcJNNE?si=dwgY_VZs7AY13gSg',
        title: 'Example 2',
        category: 'Rock Music',
      },
      {
        url: 'https://www.youtube.com/embed/cYrUvI1KbXQ?si=UtUFPb8cRCYTfxBL',
        title: 'Example 3',
        category: 'Rock Music',
      },
      {
        url: 'https://www.youtube.com/embed/bJzb-RuUcMU?si=-uJfR38dbNfXvUy5',
        title: 'Example 4',
        category: 'Programming',
      },
      {
        url: 'https://www.youtube.com/embed/HIj8wU_rGIU?si=REkcBuuJ5-',
        title: 'Example 5',
        category: 'Programming',
      },
      {
        url: 'https://www.youtube.com/embed/b093aqAZiPU?si=OkenqRhSjDc9g9NI',
        title: 'Example 6',
        category: 'Programming',
      },
      {
        url: 'https://www.youtube.com/embed/ls5ht4m5Jao?si=J1EWRSCWeSRql4NO',
        title: 'Example 7',
        category: 'Sport',
      },
      {
        url: 'https://www.youtube.com/embed/Y0by5eIwIOY?si=Cjh-RdSpYboAnXrC',
        title: 'Example 8',
        category: 'Sport',
      },
      {
        url: 'https://www.youtube.com/embed/EZtQx6ErjBI?si=8HVQt9vTV3Y2T3qa',
        title: 'Example 9',
        category: 'Sport',
      },
    ];

    // Insert the data into your database table
    await queryInterface.bulkInsert('videos', data, {});

    // You can replace 'your_table_name' with the actual name of your table.
  },

  async down(queryInterface, Sequelize) {
    // Implement the down function to undo the seed if needed
    // For example, to delete all records inserted in the up function
    await queryInterface.bulkDelete('videos', null, {});
  },
};
