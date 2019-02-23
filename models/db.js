import logger from '../config/logger';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/sequelize.js')[env];

const basename = path.basename(__filename);
const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, {
  dialect: config.dialect,
});

sequelize.authenticate()
  .then(() => logger.info('Connected to database'))
  .catch(error => logger.error(error.message));

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
