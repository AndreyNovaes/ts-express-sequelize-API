'use strict';
const { Model } = require('sequelize');
const sequelize = require('../config/connection');
const DataTypes = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    id = { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true };
    role = { type: DataTypes.STRING, allowNull: false };
    username = { type: DataTypes.STRING, allowNull: false };
    password = { type: DataTypes.STRING, allowNull: false };
    email = { type: DataTypes.STRING, allowNull: false };
    // static associate(models) {
    //   // define association here
    // }
  }
  users.init({
    id: DataTypes.INTEGER,
    username: DataTypes.STRING,
    role: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
    underscored: true,
    timeStamps: false
  });
  return users;
};