const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Poll extends Model {}

Poll.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    list_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'list',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'poll',
  }
);

module.exports = Poll;