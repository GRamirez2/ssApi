'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Employee', [
      {
        manager_id:1,
        engagement_id: 1,
        id: 1,
        first_name: 'george',
        last_name: 'ramirez',
        active: true,
        appAdmin: true,
        status: 'front-end',
        email: 'gramirez@singlestoneconsulting.com',
        phone: '713-492-9404',
        linkedIn: 'https://www.linkedin.com/in/gramirez2',
        github: 'https://github.com/GRamirez2',
        start_date: new Date('August 1, 2021'),
        extended: false,
        extended_start_date: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        manager_id:3,
        engagement_id: 5,
        id: 2,
        first_name: 'roberto',
        last_name: 'rubet',
        active: true,
        appAdmin: true,
        status: 'front-end',
        email: 'rrubet@singlestoneconsulting.com',
        phone: '123-456-7890',
        linkedIn: 'https://www.linkedin.com/in/roberto-rubet/',
        github: 'https://github.com/Bertodemus',
        start_date: new Date('September 1, 2021'),
        extended: false,
        extended_start_date: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      manager_id:3,
      engagement_id: 3,
      id: 3,
      first_name: 'Connor',
      last_name: 'Scofield',
      active: true,
      appAdmin: false,
      status: 'front-end',
      email: 'cscofield@singlestoneconsulting.com',
      phone: '808-897-1234',
      linkedIn: 'https://www.linkedin.com/in/connor-scofield-06213698/',
      github: 'https://github.com/WillCoScofield',
      start_date: new Date('July 1, 2022'),
      extended: false,
      extended_start_date: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      manager_id:3,
      engagement_id: 4,
      id: 4,
      first_name: 'Nate',
      last_name: 'Grandelis',
      active: true,
      appAdmin: false,
      status: 'front-end',
      email: 'ngrandelis@singlestoneconsulting.com',
      phone: '123-897-9299',
      linkedIn: 'https://www.linkedin.com/in/nateg/',
      github: 'https://github.com/nateg',
      start_date: new Date('September 1, 2021'),
      extended: true,
      extended_start_date: new Date('October 2, 2022'),
      createdAt: new Date(),
      updatedAt: new Date()
  }
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Employee', null, {});
  }
};
