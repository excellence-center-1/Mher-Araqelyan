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
          url: 'https://www.youtube.com/embed/fregObNcHC8?si=MzF1ui7p1YVLhUpP',
          categoryId: category1.id,
        },
        {
          title: 'Video 2',
          is_public: true,
          url: 'https://www.youtube.com/embed/DnGdoEa1tPg?si=EHI1Rk3kqvteQFYT',
          categoryId: category1.id,
        },
        {
          title: 'Video 3',
          is_public: true,
          url: 'https://www.youtube.com/embed/fGn_ikKMdIk?si=j8zb7Ok2j9HkxKc0',
          categoryId: category1.id,
        },
        {
          title: 'Video 4',
          is_public: true,
          url: 'https://www.youtube.com/embed/_VKA8CIO66M?si=5laX7I4luycZIUYn',
          categoryId: category2.id,
        },
        {
          title: 'Video 5',
          is_public: true,
          url: 'https://www.youtube.com/embed/T8ZOcqZfadA?si=lS20u2y7rhG0rmTl',
          categoryId: category2.id,
        },
        {
          title: 'Video 6',
          is_public: true,
          url: 'https://www.youtube.com/embed/vTVuB1kgpd4?si=QPx5kk9458iULK7h',
          categoryId: category2.id,
        },
        {
          title: 'Video 7',
          is_public: true,
          url: 'https://www.youtube.com/embed/MaV9VqFMzB4?si=7VJNRPiOuSEiWqB4',
          categoryId: category3.id,
        },
        {
          title: 'Video 8',
          is_public: true,
          url: 'https://www.youtube.com/embed/iILFBGm_I9M?si=fe-O9QUhk37izVyC',
          categoryId: category3.id,
        },
        {
          title: 'Video 9',
          is_public: true,
          url: 'https://www.youtube.com/embed/lzHLPaU7UUE?si=xiXTY8mGTRN8R2Kd',
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

