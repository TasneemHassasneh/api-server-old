'use strict';

const express = require('express');
const router = express.Router();
const { food } = require('../models/index');

// GET all food
router.get('/food', async (req, res) => {
 
    const Food = await food.findAll();
    res.status(200).json(Food);

});

// GET a single food by ID
router.get('/food/:id', async (req, res) => {
  const id = req.params.id;
 
    const Food = await food.findOne({where: {id: id}});
    if (Food) {
      res.status(200).json(Food);
    } else {
      res.status(404).json({ error: 'Food not found' });
    }
 
});

// POST create new food
router.post('/food', async (req, res) => {
  const obj = req.body;
 
    const Food = await food.create(obj);
    res.status(201).json(Food);
 
});

// PUT update existing food by ID
router.put('/food/:id', async (req, res) => {
  const id = req.params.id;
  const obj = req.body;
 
    const Food = await food.update(obj, {where :  {id}});
    res.status(202).json(Food)

});

// DELETE delete food by ID
router.delete('/food/:id', async (req, res) => {
  const id = req.params.id;
 
    const Food = await food.destroy({where: {id}});
  
      res.status(204).json('Deleted');
 

});

module.exports = router;


