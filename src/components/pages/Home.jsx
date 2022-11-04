import React, { useEffect, useState } from 'react';

import RecipeBox from '../RecipeBox';
import Header from '../Header';
import { RecipeApi } from '../../api';

function CreateBox() {
  return <div className="grey-border create-box" />;
}

function Home() {
  const [recipes, setRecipes] = useState(undefined);
  const [recipesLoaded, setRecipesLoaded] = useState(false);

  useEffect(() => {
    RecipeApi.getRecipes().then((recipes) => {
      setRecipes(recipes);
      setRecipesLoaded(true);
    });
  });

  return (
    <>
      <Header title="Header Title" image="/public/header.png" />
      {recipesLoaded ? (
        <div className="recipes-container">
          {recipes.map((recipe) => (
            <RecipeBox key={recipe.id} {...recipe} />
          ))}
          <CreateBox />
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default Home;
