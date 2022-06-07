const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });

module.exports = {
  development: {
    username: process.env.MYSQL_USER || 'seuUsername',
    password: process.env.MYSQL_PASSWORD || 'suaSenha',
    database: process.env.MYSQL_DATABASE || 'ts-express-sequelize-API',
    host: process.env.MYSQL_HOSTNAME || 'localhost',
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DATABASE || 'ts-express-sequelize-API',
    host: process.env.MYSQL_HOSTNAME || 'localhost',
    dialect: 'mysql', // 'mysql' | 'sqlite' | 'postgres' | 'mariadb',
  },
  production: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DATABASE || 'ts-express-sequelize-API',
    host: process.env.MYSQL_HOSTNAME || 'localhost',
    dialect: 'mysql', // 'mysql' | 'sqlite' | 'postgres' | 'mariadb',
  },
};
