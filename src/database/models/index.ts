import { Sequelize } from 'sequelize';
import * as config from '../config/config';

const db = new Sequelize(config);

export default db;
