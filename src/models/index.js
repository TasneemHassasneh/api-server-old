'use strict';

const { Sequelize, DataTypes } = require("sequelize");

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URI
let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
} : {}

let sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);

const clothes = require('./clothes.model');
const food = require('./food.model');

module.exports = {
  db: sequelize,
  clothes: clothes(sequelize, DataTypes),
  food: food(sequelize, DataTypes)
}