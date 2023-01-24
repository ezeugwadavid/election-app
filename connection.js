const { Sequelize } = require('sequelize');
require('dotenv').config();

const uri = process.env.URI;
const sequelize = new Sequelize(uri);

module.exports = sequelize;
