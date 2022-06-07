require('dotenv').config();

const {
  MYSQL_USER, MYSQL_PASSWORD, MYSQL_HOSTNAME, MYSQL_DATABASE, MYSQL_PORT,
} = process.env;
console.log(MYSQL_USER, MYSQL_PASSWORD, MYSQL_HOSTNAME, MYSQL_DATABASE, MYSQL_PORT);

module.exports = {
  development: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
    database: process.env.MYSQL_DATABASE || 'ts-express-sequelize-API',
    host: process.env.HOSTNAME || 'localhost',
    dialect: 'mysql', // 'mysql' | 'sqlite' | 'postgres' | 'mariadb',
  },
  test: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DATABASE || 'ts-express-sequelize-API',
    host: process.env.HOSTNAME || 'localhost',
    dialect: 'mysql', // 'mysql' | 'sqlite' | 'postgres' | 'mariadb',
  },
  production: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DATABASE || 'ts-express-sequelize-API',
    host: process.env.HOSTNAME || 'localhost',
    dialect: 'mysql', // 'mysql' | 'sqlite' | 'postgres' | 'mariadb',
  },
};
