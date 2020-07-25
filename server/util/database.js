/**
 * Model for product table
 *
 * @author [Shubham Suri](https://github.com/ssuri013)
 * @author [Aman Vishnani]()
 */
const Sequelize = require('sequelize');

const SCHEMA = process.env.DATABASE || 'mydb'
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

// declare parameteres for interaction with mysql database
const sequelize = new Sequelize(SCHEMA, DB_USER, DB_PASSWORD, {
  dialect: 'mysql',
  host: DB_HOST,
  port:3306,
}, options);

module.exports = sequelize;
