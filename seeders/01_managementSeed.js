'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Management', [
      {
        id: 1,
        first_name: 'trey',
        last_name: 'chapman',
        seniority_level: 'managing consultant',
        department: 'app dev',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        first_name: 'george',
        last_name:'ramirez',
        seniority_level: 'senior consultant',
        department: 'app dev',
        createdAt: new Date(),
        updatedAt: new Date()
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Management', null, {});
  }
};
