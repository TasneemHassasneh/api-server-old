"use strict";

const express = require("express");
const { ingredientCollection } = require("../models/index");
const router = express.Router();

router.get("/ingredient", async (req, res) => {
  // const Ingredient = await ingredient.findAll();
  const Ingredient = await ingredientCollection.read();
  res.status(200).json(Ingredient);
});

// GET a single ingredient by ID
router.get("/ingredient/:id", async (req, res) => {
  const id = req.params.id;

  // const Ingredient = await ingredient.findOne({where: {id: id}});
  const Ingredient = await ingredientCollection.read({ where: { id: id } });
  if (Ingredient) {
    res.status(200).json(Ingredient);
  } else {
    res.status(404).json({ error: "Ingredient not found" });
  }
});

// POST create new ingredient
router.post("/ingredient", async (req, res) => {
  const obj = req.body;

  // const Ingredient = await ingredient.create(obj);
  const Ingredient = await ingredientCollection.create(obj);
  res.status(201).json(`successfully create `);
});

// PUT update existing ingredient by ID
router.put("/ingredient/:id", async (req, res) => {
  const id = req.params.id;
  const obj = req.body;

  // const Ingredient = await ingredient.update(obj, {where :  {id}});
  const Ingredient = await ingredientCollection.update(id, obj);
  res.status(202).json(`Updated ${Ingredient.name}`);
});

// DELETE delete ingredient by ID
router.delete("/ingredient/:id", async (req, res) => {
  const id = req.params.id;

  // const Ingredient = await ingredient.destroy({where: {id}});
  const Ingredient = await ingredientCollection.delete(id);

  if (Ingredient) {
    res.status(204).json(`Deleted`);
  } else {
    res.status(400).json("somthing wrong");
    console.log("Error occurred while deleting record");
  }
});

module.exports = router;
