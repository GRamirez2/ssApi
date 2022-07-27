'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Employee', [
      {
        manager_id:1,
        id: 1,
        first_name: 'george',
        last_name: 'ramirez',
        active: true,
        appAdmin: true,
        status: 'capital one',
        email: 'gramirez@singlestoneconsulting.com',
        phone: '713-492-9404',
        linkedIn: 'https://www.linkedin.com/in/gramirez2',
        github: 'https://github.com/GRamirez2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        manager_id:2,
        id: 2,
        first_name: 'roberto',
        last_name: 'rubet',
        active: true,
        appAdmin: true,
        status: 'capital one',
        email: 'rrubet@singlestoneconsulting.com',
        phone: '123-456-7890',
        linkedIn: 'https://www.linkedin.com/in/roberto-rubet/',
        github: 'https://github.com/Bertodemus',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      manager_id:2,
      id: 3,
      first_name: 'Connor',
      last_name: 'Scofield',
      active: true,
      appAdmin: false,
      status: 'capital one',
      email: 'cscofield@singlestoneconsulting.com',
      phone: '808-897-1234',
      linkedIn: 'https://www.linkedin.com/in/connor-scofield-06213698/',
      github: 'https://github.com/WillCoScofield',
      createdAt: new Date(),
      updatedAt: new Date()
  }
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Employee', null, {});



  }
};
