const Sequelize = require('sequelize');

const SCHEMA = process.env.DATABASE || 'greenKart'
const DB_USER = process.env.DB_USER || 'jrana'
const DB_PASSWORD = process.env.DB_PASSWORD || 'jrana'
const DB_HOST = process.env.DB_HOST || '54.86.125.185'


const options = {
  define: {
      //prevent pluralization of table names
      freezeTableName: true,
      timestamps: false
  }
}

const sequelize = new Sequelize(SCHEMA, DB_USER, DB_PASSWORD, {
  dialect: 'mysql',
  host: DB_HOST,
  port:3306,
}, options);


module.exports = sequelize;
