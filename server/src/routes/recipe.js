import { Router } from 'express';

import Recipe from '../models/recipe.js';

import verifyJWT from '../jwt.js';

const recipeRoutes = Router();

// This section will help you get a list of all the recipes.
recipeRoutes.route('/api/recipes').get((req, res) => {
  Recipe.find({}, (err, recipes) => {
    if (err) res.status(400).json({ success: false, error: err.message });
    else res.json({ success: true, recipes });
  });
});

// This section will help you get a single recipe by id
recipeRoutes.route('/api/recipe/:id').get((req, res) => {
  Recipe.findById(req.params.id, (err, recipe) => {
    if (err) res.status(400).json({ success: false, error: err.message });
    else res.json({ success: true, recipe });
  });
});

// This section will help you create a new recipe.
recipeRoutes.route('/api/recipe').post(verifyJWT, (req, res) => {
  Recipe.create(req.body, (err, recipe) => {
    if (err) res.status(400).json({ success: false, error: err.message });
    else res.json({ success: true, recipe });
  });
});

// This section will help you update a recipe by id.
recipeRoutes.route('/api/recipe/:id').put(verifyJWT, (req, res) => {
  Recipe.findByIdAndUpdate(req.params.id, req.body, (err, recipe) => {
    if (err) res.status(400).json({ success: false, error: err.message });
    else res.json({ success: true, recipe });
  });
});

// This section will help you delete a recipe
recipeRoutes.route('/api/recipe/:id').delete(verifyJWT, (req, response) => {
  Recipe.findByIdAndDelete(req.params.id, (err, recipe) => {
    if (err) response.status(400).json({ success: false, error: err.message });
    else response.json({ success: true });
  });
});

export default recipeRoutes;
