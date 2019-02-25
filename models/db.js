import logger from '../config/logger';

const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/sequelize.js')[env];

const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, {
  dialect: config.dialect,
});

sequelize.authenticate()
  .then(() => logger.info('Connected to database'))
  .catch(error => logger.error(error.message));

db.User = sequelize.import('./User.js');
db.Product = sequelize.import('./Product.js');
db.Review = sequelize.import('./Review.js');

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
