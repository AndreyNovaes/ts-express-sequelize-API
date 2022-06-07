import { Sequelize } from 'sequelize';
import * as config from '../config/config';

const db = new Sequelize(config);

try {
  db.authenticate();
  console.log('Connection has been established successfully.');
} catch (err) {
  console.error('Unable to connect to the database: ', err);
}

export default db;