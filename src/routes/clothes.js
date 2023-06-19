'use strict';

const express = require('express');
const router = express.Router();
const { clothes } = require('../models/index');

// GET all clothes
router.get('/clothes', async (req, res) => {
 
    const Clothes = await clothes.findAll();
    res.status(200).json(Clothes);

});

// GET a single clothes by ID
router.get('/clothes/:id', async (req, res) => {
  const id = req.params.id;
 
    const Clothes = await clothes.findOne({where: {id: id}});
    if (Clothes) {
      res.status(200).json(Clothes);
    } else {
      res.status(404).json({ error: 'Clothes not found' });
    }
 
});

// POST create new clothes
router.post('/clothes', async (req, res) => {
  const { name, color, size } = req.body;
 
    const Clothes = await clothes.create({ name: 'Shirt', color: 'Blue', size: 'Medium' });
    res.status(201).json(Clothes);
 
});

// PUT update existing clothes by ID
router.put('/clothes/:id', async (req, res) => {
  const id = req.params.id;
  const obj = req.body;
 
    const Clothes = await clothes.update(obj, {where :  {id}});
    res.status(202).json(Clothes)

});

// DELETE delete clothes by ID
router.delete('/clothes/:id', async (req, res) => {
  const id = req.params.id;
 
    const Clothes = await clothes.destroy({where: {id}});
  
      res.status(204).json(Clothes);
 

});

module.exports = router;


