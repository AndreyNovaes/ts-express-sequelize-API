import { Options } from "sequelize";

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });

const { MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE, MYSQL_HOST, MYSQL_PORT } = process.env;

const config: Options = {
  username: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
  host: MYSQL_HOST,
  port: Number(MYSQL_PORT),
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z'
  },
  logging: false,
};

module.exports = config
