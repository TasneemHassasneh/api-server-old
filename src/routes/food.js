"use strict";

const express = require("express");
const router = express.Router();
const {
  food,
  ingredientCollection,
  foodCollection,
} = require("../models/index");

// GET all food
router.get("/food", async (req, res) => {
  // const Food = await food.findAll();
  const Food = await foodCollection.read();
  res.status(200).json(Food);
});

// GET a single food by ID
router.get("/food/:id", async (req, res) => {
  const id = req.params.id;

  // const Food = await food.findOne({where: {id: id}});
  const Food = await foodCollection.read({ where: { id: id } });
  if (Food) {
    res.status(200).json(Food);
  } else {
    res.status(404).json({ error: "Food not found" });
  }
});

// POST create new food
router.post("/food", async (req, res) => {
  const obj = req.body;

  // const Food = await food.create(obj);
  const Food = await foodCollection.create(obj);
  res.status(201).json(`successfully create `);
});

// PUT update existing food by ID
router.put("/food/:id", async (req, res) => {
  const id = req.params.id;
  const obj = req.body;

  // const Food = await food.update(obj, {where :  {id}});
  const Food = await foodCollection.update(id, obj);
  res.status(202).json(`Updated ${Food.name}`);
});

// DELETE delete food by ID
router.delete("/food/:id", async (req, res) => {
  const id = req.params.id;

  // const Food = await food.destroy({where: {id}});
  const Food = await foodCollection.delete(id);
  if (Food) {
    res.status(204).json(`Deleted ${Food.name}`);
  } else {
    res.status(400).json("somthing wrong");
    console.log("Error occurred while deleting record");
  }
});

//Food Ingredient by id
router.get("/foodingredient/:id", async (req, res) => {
  const id = req.params.id;
  const foodIngredientById = await foodCollection.readFoodIngredient(
    id,
    ingredientCollection.model
  );
  res.status(200).json(foodIngredientById);
});

module.exports = router;
