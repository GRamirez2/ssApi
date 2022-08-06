'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Engagement', [
    {
      id: 1,
      client: 'capital one',
      project: 'montana',
      start_date: new Date('August 1, 2021'),
      end_date: new Date('December 2, 2022'),
      extended: true,
      notes: 'new director hired, Troy, remaking the whole team with lots of new hires from Verizon',
      project_type: 'time & materials',
      size: 1,
      project_length: '1 year',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      client: 'capital one',
      project: 'Pineapple',
      start_date: new Date('January 1, 2021'),
      end_date: new Date('October 30, 2022'),
      extended: true,
      notes: 'not a coding position',
      project_type: 'time & materials',
      size: 1,
      project_length: '1 year',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      client: 'capital one',
      project: 'ESM',
      start_date: new Date('January 1, 2021'),
      end_date: new Date('December 18, 2022'),
      extended: true,
      notes: 'making a commercial product',
      project_type: 'time & materials',
      size: 4,
      project_length: '1 year',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 4,
      client: 'car lotz',
      project: 'orange crush',
      start_date: new Date('August 1, 2021'),
      end_date: new Date('October 2, 2022'),
      extended: true,
      notes: 'lots of internal turnover',
      project_type: 'time & materials',
      size: 4,
      project_length: '1 year',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 5,
      client: 'single stone',
      project: 'run team',
      start_date: new Date('June 1, 2022'),
      end_date: null,
      extended: false,
      notes: 'They need help with real developers',
      project_type: 'time & materials',
      size: 4,
      project_length: '1 year',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Engagement', null, {});
  }
};
