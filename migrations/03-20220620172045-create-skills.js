'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Skills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      employee_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Employee',
          key: 'id'
        }
      },
      primary_tech: {
        type: Sequelize.STRING
      },
      secondary_tech: {
        type: Sequelize.STRING
      },
      desired_tech: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Skills');
  }
};