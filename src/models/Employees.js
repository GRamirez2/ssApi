import { DataTypes } from 'sequelize';
const db = require('../utils/dbConnect');
const Skills = require('./Skills');
const Management = require('./Management');

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
        validate: {
          notNull: {
            msg: 'first name is required'
          }
        }
      },
      last_name: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'last name is required'
          }
        }
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
        validate: {
          notNull: {
            msg: 'email is required'
          }
        },
        unique: true,
        
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

Employee.Skills = Employee.hasOne(Skills, {foreignKey: 'employee_id'});

Employee.Management = Employee.belongsTo(Management, {foreignKey: 'manager_id'});

module.exports = Employee;