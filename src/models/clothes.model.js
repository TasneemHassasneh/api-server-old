'use strict';
// Model definition for clothes table based on sequelize
const clothes = (sequelize, DataTypes) => sequelize.define('clothes', {
  // The food table has these attributes(columns)
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  size: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = clothes;
