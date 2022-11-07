import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { RecipeApi } from '../../api';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(undefined);
  const [recipeLoaded, setRecipeLoaded] = useState(false);

  useEffect(() => {
    RecipeApi.getMockData().then((rcps) => {
      setRecipe(rcps.find((r) => r.id === id));
      setRecipeLoaded(true);
    });
  }, [id]);

  return recipeLoaded ? (
    <div className="recipe-detail">
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} />
      <p>{recipe.description}</p>
      <p>{recipe.time}</p>
      <p>{recipe.calories}</p>
      <p>{recipe.servings}</p>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <ul>
        {recipe.instructions.map((instruction) => (
          <li key={instruction}>{instruction}</li>
        ))}
      </ul>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default RecipeDetail;
