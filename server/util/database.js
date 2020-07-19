const Sequelize = require('sequelize');


const options = {
  define: {
      //prevent pluralization of table names
      freezeTableName: true,
      timestamps: false
  }
}

const sequelize = new Sequelize('mydb2', 'root', 'password', {
  dialect: 'mysql',
  host: 'localhost'
}, options);


module.exports = sequelize;
