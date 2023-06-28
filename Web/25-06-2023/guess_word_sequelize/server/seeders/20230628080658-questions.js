'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('questions', [
      {
        word: 'cat',
        question: 'Furry animal with whiskers'
      },
      {
        word: 'dog',
        question: 'Barks and wags its tail'
      },
      {
        word: 'house',
        question: 'A place where people live'
      },
      {
        word: 'car',
        question: 'A means of transportation'
      },
      {
        word: 'sun',
        question: 'Source of light and heat'
      },
      {
        word: 'book',
        question: 'A set of pages with text'
      },
      {
        word: 'tree',
        question: 'Tall plant with branches and leaves'
      },
      {
        word: 'chair',
        question: 'A piece of furniture for sitting'
      },
      {
        word: 'apple',
        question: 'A round fruit with a red or green skin'
      },
      {
        word: 'computer',
        question: 'An electronic device for processing data'
      },
      {
        word: 'river',
        question: 'A large flowing body of water'
      },
      {
        word: 'moon',
        question: 'The natural satellite of the Earth'
      },
      {
        word: 'pen',
        question: 'A tool used for writing or drawing'
      },
      {
        word: 'flower',
        question: 'The reproductive structure of a plant'
      },
      {
        word: 'music',
        question: 'Organized sound with rhythm and melody'
      },
      {
        word: 'mountain',
        question: 'A large landform that rises above the surrounding land'
      },
      {
        word: 'beach',
        question: 'A sandy or pebbly shore by the ocean'
      },
      {
        word: 'clock',
        question: 'A device for measuring and displaying time'
      },
      {
        word: 'bicycle',
        question: 'A two-wheeled vehicle powered by pedals'
      },
      {
        word: 'airplane',
        question: 'A powered flying vehicle with fixed wings and engines'
      },
      {
        word: 'hat',
        question: 'A head covering typically worn for protection or fashion'
      },
      {
        word: 'key',
        question: 'A small metal instrument used to unlock something'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('questions', null, {});
  }
};
