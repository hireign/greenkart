/**
 * @author Mihir Patel
 */
const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Faq = sequelize.define(
  "faq",
  {
    faq_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    question: { type: Sequelize.STRING, allowNull: false },
    answer: { type: Sequelize.STRING, allowNull: false },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Faq;
