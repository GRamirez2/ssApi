import { DataTypes } from 'sequelize';
const db = require('../utils/dbConnect');


const Engagement = db.define('Engagement', {
      client: {
        type: DataTypes.STRING
      },
      project: {
        type: DataTypes.STRING
      },
      start_date: {
        type: DataTypes.DATE
      },
      end_date: {
        type: DataTypes.DATE
      },
      extended: {
        type: DataTypes.BOOLEAN
      },
      notes: {
        type: DataTypes.TEXT
      },
      project_type: {
        type: DataTypes.STRING
      },
      size: {
        type: DataTypes.INTEGER
      },
      project_length: {
        type: DataTypes.STRING
      }
}, {
  tableName: 'Engagement'
});


module.exports = Engagement;