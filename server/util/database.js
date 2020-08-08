/**
 * Model for product table
 *
 * @author [Shubham Suri](https://github.com/ssuri013)
 * @author [Aman Vishnani]()
 */
const Sequelize = require('sequelize');

const SCHEMA = process.env.DATABASE || 'greenkart'
const DB_USER = process.env.DB_USER || 'greenkart'
const DB_PASSWORD = process.env.DB_PASSWORD || 'Dal@group22'
const DB_HOST = process.env.DB_HOST || 'project.crcgrfwldzqy.us-east-1.rds.amazonaws.com'

// wrongly used : to be removed -- notify aman
// const options = {
//   define: {
//       //prevent pluralization of table names
//       freezeTableName: true,
//       timestamps: false
//   },
//   logging: false
// }

// declare parameteres for interaction with mysql database
const sequelize = new Sequelize(SCHEMA, DB_USER, DB_PASSWORD, {
  dialect: 'mysql',
  host: DB_HOST,
  port:3306,
  logging: true
});

module.exports = sequelize;
