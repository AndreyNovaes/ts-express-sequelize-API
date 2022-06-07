'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class matches extends Model {
    id= { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true };
    homeTeam = { type: DataTypes.INTEGER, allowNull: false };
    homeTeamGoals = { type: DataTypes.INTEGER, allowNull: false };
    awayTeam = { type: DataTypes.INTEGER, allowNull: false };
    awayTeamGoals = { type: DataTypes.INTEGER, allowNull: false };
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  matches.init({
    id: DataTypes.INTEGER,
    homeTeam: DataTypes.INTEGER,
    homeTeamGoals: DataTypes.INTEGER,
    awayTeam: DataTypes.INTEGER,
    awayTeamGoals: DataTypes.INTEGER,
    inProgress: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'matches',
    underscored: true,
    timeStamps: false
  });
  return matches;
};
