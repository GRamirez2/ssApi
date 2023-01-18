import { DataTypes } from 'sequelize';
import { db } from '../utils/dbConnect';

const Skills = require('./Skill');
const Management = require('./Management');
const Engagement = require('./Engagement');

const Employee = db.define('Employee', {
      manager_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'manager_id',
        references: {
          model: 'Management',
          key: 'id'
        },
        validate: {
          isNumeric: {
            msg: 'Manager Id is required and must be a whole number'
          },
          notNull: {
            msg: 'Manager Id can not be null'
          }
        }
      },
      engagement_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'engagement_id',
        references: {
          model: 'Engagement',
          key: 'id'
        },
        validate: {
          isNumeric: {
            msg: 'Engagement Id is required and must be a whole number'
          },
          notNull: {
            msg: 'Engagement Id can not be null'
          }
        }
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'First name is required'
          },
          notEmpty: {
            msg: 'First name is required'
          }
        }
      },
      last_name: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Last name is required'
          },
          notEmpty: {
            msg: 'Last name is required'
          }
        }
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Status is required'
          },
          notEmpty: {
            msg: 'Status is required'
          }
        }
      },
      appAdmin: {
        type: DataTypes.BOOLEAN,
        default: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: 'Email is required and must follow a standard email format'
          }
        },
        
        
      },
      phone: {
        type: DataTypes.STRING,
        unique: true
      },
      linkedIn: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isUrl: {
            msg: 'LinkedIn must be a url'
          }
        }
      },
      github: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isUrl: {
            msg: 'Github must be a url'
          }
        }
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: {
            msg: 'Start Date must be a date'
          }
        }
      },
      extended: {
        type: DataTypes.BOOLEAN,
        default: false
      },
      extended_start_date: {
        type: DataTypes.DATE,
        validate: {
          isDate: {
            msg: 'Extended Start Date must be a date'
          }
        }
      },
}, {
  tableName: 'Employee'
});

Employee.Skills = Employee.hasOne(Skills, {foreignKey: 'employee_id'});

Employee.Management = Employee.belongsTo(Management, {foreignKey: 'manager_id'});

Employee.Engagement = Employee.belongsTo(Engagement, {foreignKey: 'engagement_id'});

module.exports = Employee;