'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Skills', [
      {
        id: 1,
        employee_id: 1,
        primary_tech: 'angular',
        secondary_tech: 'react',
        desired_tech: 'nodejs',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        employee_id: 2,
        primary_tech: 'react',
        secondary_tech: 'kotlin',
        desired_tech: 'angular',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      id: 3,
      employee_id: 3,
      primary_tech: 'react',
      secondary_tech: 'kotlin',
      desired_tech: 'aws',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 4,
      employee_id: 4,
      primary_tech: 'react',
      secondary_tech: 'java',
      desired_tech: 'aws',
      createdAt: new Date(),
      updatedAt: new Date()
  }
  ], {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Skills', null, {});
  }
};
