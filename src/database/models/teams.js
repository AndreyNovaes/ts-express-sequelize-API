'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class teams extends Model {
    id = { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true };
    teamName = { type: DataTypes.STRING, allowNull: false };
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  teams.init({
    id: DataTypes.INTEGER,
    teamName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'teams',
    timeStamps: false,
    underscored: true
  });
  return teams;
};