'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Engagement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Engagement.init({
    client: DataTypes.STRING,
    project: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    extended: DataTypes.BOOLEAN,
    notes: DataTypes.TEXT,
    project_type: DataTypes.STRING,
    size: DataTypes.INTEGER,
    project_length: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Engagement',
  });
  return Engagement;
};