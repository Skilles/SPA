import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { RecipeApi } from '../../../api/recipe.js';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(undefined);
  const [recipeLoaded, setRecipeLoaded] = useState(false);

  useEffect(() => {
    RecipeApi.getRecipe(id).then((rcp) => {
      setRecipe(rcp);
      setRecipeLoaded(true);
    });
  }, [id]);

  return recipeLoaded ? (
    <div className="grey-border recipe-detail">
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} />
      <p>{recipe.description}</p>
      <span>
        <h2>Time needed</h2>
        <p>{recipe.time}</p>
      </span>
      <span>
        <h2>Calories</h2>
        <p>{recipe.calories}</p>
      </span>
      <span>
        <h2>Servings</h2>
        <p>{recipe.servings}</p>
      </span>
      <span>
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </span>
      <span>
        <h2>Instructions</h2>
        <ul>
          {recipe.instructions.map((instruction) => (
            <li key={instruction}>{instruction}</li>
          ))}
        </ul>
      </span>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default RecipeDetail;
