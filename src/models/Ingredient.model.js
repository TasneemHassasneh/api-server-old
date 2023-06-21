// Model definition for ingredient table based on sequelize
const Ingredient =(sequelize, DataTypes)=> sequelize.define('Ingredient', {
     // The food table has these attributes(columns)
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      foodId:{
        type: DataTypes.INTEGER,
        allowNull: false,
      }
});

module.exports = Ingredient;
