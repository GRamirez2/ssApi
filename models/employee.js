'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Employee.init({
    manager_id: DataTypes.INTEGER,
    engagement_id: DataTypes.INTEGER,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    appAdmin: DataTypes.BOOLEAN,
    status: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    linkedIn: DataTypes.STRING,
    github: DataTypes.STRING,
    start_date: DataTypes.DATE,
    extended: DataTypes.BOOLEAN,
    extended_start_date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};