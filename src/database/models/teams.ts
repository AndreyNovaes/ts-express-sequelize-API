'use strict';
import { DataTypes, Model } from 'sequelize';
import db from '.';
  class teams extends Model {
    public id: number;
    public teamName: string;
  }
  teams.init({
    teamName: DataTypes.STRING
  }, {
    sequelize: db,
    modelName: 'teams',
    timestamps: false,
    underscored: true
  });

  export default teams;
