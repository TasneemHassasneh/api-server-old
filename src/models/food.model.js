'use strict';
// Model definition for food table based on sequelize
const Food = (sequelize, DataTypes) => sequelize.define('Food', {
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
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  expirationDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Food;
