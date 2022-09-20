const Sequelize = require('sequelize');
const DB = require('../config.js');

const connection = new Sequelize(DB.DB_NAME, DB.DB_USER, DB.DB_PASSWORD, {
    host: DB.DB_HOST,
    dialect: 'mysql'
});

module.exports = connection;