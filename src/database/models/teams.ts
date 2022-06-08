'use strict';
import { DataTypes, Model } from 'sequelize';
import db from '.';
  class teams extends Model {
    public id: number;
    public teamName: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    // }
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
