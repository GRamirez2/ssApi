import { DataTypes } from 'sequelize';
import { db } from '../utils/dbConnect'


const Skills = db.define('Skills', {
    employee_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'employee_id',
        references: {
          model: 'Employee',
          key: 'id'
        }
      },
      primary_tech: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Must define an employee\'s primary tech'
          }
        }
      },
      secondary_tech: {
        type: DataTypes.STRING
      },
      desired_tech: {
        type: DataTypes.STRING
      }
}, {
  tableName: 'Skills'
});

module.exports = Skills;