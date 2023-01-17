import { DataTypes } from 'sequelize';
import { db } from '../utils/dbConnect'


const Management = db.define('Management', {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: { 
        type: DataTypes.STRING,
        allowNull: false,
      },
      seniority_level: {
        type: DataTypes.STRING
      },
      department: {
        type: DataTypes.STRING
      }
}, {
  tableName: 'Management'
});


module.exports = Management;