const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(process.env.DB_CONNTECTION_STRING) // Example for postgres

module.exports = sequelize;