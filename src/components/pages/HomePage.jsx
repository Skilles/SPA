import React, { useEffect, useState } from 'react';

import RecipeBox from './recipe/RecipeBox';
import { RecipeApi } from '../../api/recipe.js';
import RecipeCreateBox from './recipe/RecipeCreateBox';
import { useAuthContext } from '../../auth/AuthProvider';

function Home() {
  const [recipes, setRecipes] = useState(undefined);
  const [recipesLoaded, setRecipesLoaded] = useState(false);

  const { authenticated } = useAuthContext();

  useEffect(() => {
    if (!recipesLoaded) {
    RecipeApi.getRecipes().then((rcps) => {
      setRecipes(rcps);
      setRecipesLoaded(true);
    });
  }
  });

  return (
    <>
      {recipesLoaded ? (
        <div className="recipes-container">
          {recipes.map((recipe) => (
            <RecipeBox key={recipe.id} {...recipe} />
          ))}
          {authenticated && <RecipeCreateBox />}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default Home;
