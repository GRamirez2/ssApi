import { DataTypes } from 'sequelize';
const db = require('../utils/dbConnect');

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
        type: DataTypes.STRING
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