const { Videos, Categories } = require('../models/models');

const seedData = async () => {
  try {
    const videosCount = await Videos.count();
    const categoriesCount = await Categories.count();

    if (videosCount === 0 && categoriesCount === 0) {
      const category0 = await Categories.create({ name: 'All' });
      const category1 = await Categories.create({ name: 'Rock' });
      const category2 = await Categories.create({ name: 'Sport' });
      const category3 = await Categories.create({ name: 'Programming' });

      await Videos.bulkCreate([
        {
          title: 'Video 1',
          is_public: true,
          url: 'https://www.youtube.com/embed/fregObNcHC8',
          categoryId: category1.id,
        },
        {
          title: 'Video 2',
          is_public: true,
          url: 'https://www.youtube.com/embed/DnGdoEa1tPg',
          categoryId: category1.id,
        },
        {
          title: 'Video 3',
          is_public: true,
          url: 'https://www.youtube.com/embed/fGn_ikKMdIk',
          categoryId: category1.id,
        },
        {
          title: 'Video 4',
          is_public: true,
          url: 'https://www.youtube.com/embed/_VKA8CIO66M',
          categoryId: category2.id,
        },
        {
          title: 'Video 5',
          is_public: true,
          url: 'https://www.youtube.com/embed/T8ZOcqZfadA',
          categoryId: category2.id,
        },
        {
          title: 'Video 6',
          is_public: true,
          url: 'https://www.youtube.com/embed/vTVuB1kgpd4',
          categoryId: category2.id,
        },
        {
          title: 'Video 7',
          is_public: true,
          url: 'https://www.youtube.com/embed/MaV9VqFMzB4',
          categoryId: category3.id,
        },
        {
          title: 'Video 8',
          is_public: true,
          url: 'https://www.youtube.com/embed/iILFBGm_I9M',
          categoryId: category3.id,
        },
        {
          title: 'Video 9',
          is_public: true,
          url: 'https://www.youtube.com/embed/lzHLPaU7UUE',
          categoryId: category3.id,
        },

      ]);
      console.log('Seed data inserted successfully.');
    } else {
      console.log('Tables are not empty, skipping seeding.');
    }
  } catch (error) {
    console.error('Error seeding data:', error);
  }
};

module.exports = { seedData };

