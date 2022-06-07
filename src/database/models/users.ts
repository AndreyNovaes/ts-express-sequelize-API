'use strict';
import { DataTypes, Model } from 'sequelize';
import db from '.';

class users extends Model  {
  public id: number;
  public username: string;
  public role: string;
  public password: string;
  public email: string;
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
    sequelize: db,
    modelName: 'users',
    underscored: true,
    timestamps: false
});

export default users;
