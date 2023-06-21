'use strict';
// importing the required dependencies.
const { Sequelize, DataTypes } = require("sequelize");

const Collection = require('./collection');

const clothes = require('./clothes.model');
const food = require('./food.model');
const Ingredient = require('./Ingredient.model');

// Defining DATABASE_URL based on NODE_ENV && Defining the options for each environment.
const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URI
let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
} : {}

// Establishing the connection using sequelize.
let sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);

const foodModel = food(sequelize, DataTypes);
const ingredientModel = Ingredient(sequelize, DataTypes);





// food.hasMany(Ingredient);
// Ingredient.belongsTo(food);

// sourceKey -> PK
foodModel.hasMany(ingredientModel, {foreignKey: 'foodId', sourceKey: 'id'});

// targetKey -> the target model PK
ingredientModel.belongsTo(foodModel, {foreignKey: 'foodId', targetKey: 'id'})

const foodCollection = new Collection(foodModel);
const ingredientCollection = new Collection(ingredientModel);

//exporing functionalities objects.
module.exports = {
  db: sequelize,
  clothes: clothes(sequelize, DataTypes),
  food: food(sequelize, DataTypes),
  foodCollection,
  ingredientCollection
}