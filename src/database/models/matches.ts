'use strict';
import { DataTypes, Model } from 'sequelize';
import db from '.';

  class matches extends Model {
    public id: number;
    public homeTeam: number;
    public awayTeam: number;
    public homeTeamGoals: number;
    public awayTeamGoals: number;
    public inProgress: boolean;
  }
  matches.init({
    homeTeam: DataTypes.INTEGER,
    homeTeamGoals: DataTypes.INTEGER,
    awayTeam: DataTypes.INTEGER,
    awayTeamGoals: DataTypes.INTEGER,
    inProgress: DataTypes.BOOLEAN
  }, {
    sequelize: db,
    modelName: 'matches',
    underscored: true,
    timestamps: false
  });

  export default matches;
