import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Recipe, RecipeApi } from '../../../api/recipe';
import { useAuthContext } from '../../../auth/AuthProvider';
import CreateRecipeForm from './CreateRecipeForm';

function RecipeEdit({
  recipe: {
    name,
    description,
    ingredients,
    instructions,
    time,
    image,
    calories,
    servings,
    id,
  },
}) {
  const { authenticated } = useAuthContext();

  const navigate = useNavigate();

  if (!authenticated) {
    return <h1>Not Authenticated</h1>;
  }

  const initialValues = {
    name: name,
    description: description,
    ingredients: ingredients,
    instructions: instructions,
    time: time,
    image: image,
    calories: calories,
    servings: servings,
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    // assemble the data into a Recipe object
    let recipe = new Recipe();
    let instructions = [];
    let ingredients = [];
    for (const [key, value] of formData.entries()) {
      const newValue = value.trim();
      if (newValue.length === 0) {
        continue;
      }
      if (key.includes('instructions')) {
        instructions.push(newValue);
      } else if (key.includes('ingredients')) {
        ingredients.push(newValue);
      } else {
        recipe[key] = newValue;
      }
    }
    recipe.instructions = instructions;
    recipe.ingredients = ingredients;
    recipe.id = id;
    const errors = recipe.validate();

    if (errors.length > 0) {
      return errors;
    }

    RecipeApi.updateRecipe(recipe).then((recipe) => {
      navigate(0);
    });
  };

  return (
    <div className="grey-border recipe-edit">
      <h1>Edit {name}</h1>
      <CreateRecipeForm onSubmit={handleSubmit} initialValues={initialValues} />
    </div>
  );
}

export default RecipeEdit;
