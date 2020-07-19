const Sequelize = require('sequelize');

const SCHEMA = process.env.DATABASE || 'mydb2'
const DB_USER = process.env.DB_USER || 'root'
const DB_PASSWORD = process.env.DB_PASSWORD || 'password'
const DB_HOST = process.env.DB_HOST || 'localhost'


const options = {
  define: {
      //prevent pluralization of table names
      freezeTableName: true,
      timestamps: false
  }
}

const sequelize = new Sequelize(SCHEMA, DB_USER, DB_PASSWORD, {
  dialect: 'mysql',
  host: DB_HOST
}, options);


module.exports = sequelize;
