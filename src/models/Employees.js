import { DataTypes } from 'sequelize';
const db = require('../utils/dbConnect');
const Skills = require('./Skills');
const Management = require('./Management');
const skillsModel = require('../../models/skills');
const ManagementModel = require('../../models/Management');

const Employee = db.define('Employee', {
      manager_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'manager_id',
        references: {
          model: 'Management',
          key: 'id'
        }
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: { 
        type: DataTypes.STRING,
        allowNull: false,
      },
      active: {
        type: DataTypes.BOOLEAN
      },
      status: {
        type: DataTypes.STRING
      },
      appAdmin: {
        type: DataTypes.BOOLEAN,
        default: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      phone: {
        type: DataTypes.STRING,
        unique: true
      },
      linkedIn: {
        type: DataTypes.STRING,
        unique: true
      },
      github: {
        type: DataTypes.STRING
      }
}, {
  tableName: 'Employee'
});

Employee.hasOne(Skills, {foreignKey: 'employee_id'});

Employee.belongsTo(Management, {foreignKey: 'manager_id'});

module.exports = Employee;