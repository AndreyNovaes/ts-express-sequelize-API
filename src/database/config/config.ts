import { Options } from "sequelize";

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });

const { MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE, MYSQL_HOST, MYSQL_PORT } = process.env;

const dbName = MYSQL_DATABASE || 'test';
const dbUser = MYSQL_USER || 'root';
const dbPassword = MYSQL_PASSWORD || 'password';
const dbHost = MYSQL_HOST || 'localhost';
const dbPort = MYSQL_PORT || 3306;

const config: Options = {
  username: dbUser,
  password: dbPassword,
  database: dbName,
  host: dbHost,
  port: Number(dbPort),
  dialect: 'mysql',
  dialectOptions: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  },
  logging: false,
};

module.exports = config
