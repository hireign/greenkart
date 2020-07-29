/**
 * @author Mihir Patel
 */
const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const complaint = sequelize.define(
  "complaint",
  {
    complaint_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: Sequelize.STRING, allowNull: false },
    email_id: { type: Sequelize.STRING, allowNull: false },
    contact_no: { type: Sequelize.INTEGER, allowNull: false },
    message: { type: Sequelize.STRING, allowNull: false },
    state: { type: Sequelize.STRING, allowNull: false },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = complaint;
