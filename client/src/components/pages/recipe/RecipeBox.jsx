import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useAuthContext } from '../../../auth/AuthProvider';
import { RecipeApi } from '../../../api/recipe';

function RecipeBadge({ label, value }) {
  return (
    <span className="recipe-badge">
      <h4>{label}</h4>
      <p>{value}</p>
    </span>
  );
}

function RecipeBox({ name, description, time, image, calories, servings, id }) {
  const { authenticated } = useAuthContext();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!window.confirm('Are you sure you want to delete this recipe?')) return;
    RecipeApi.deleteRecipe(id).then((result) => {
      if (result) {
        // refresh the page
        navigate(0);
      } else {
        alert('Failed to delete recipe');
      }
    });
  };

  return (
    <div className="grey-border recipe-box">
      <div className="recipe-image">
        <img src={image} alt={name} />
        <Link to={`/recipe/${id}`}>
          <div className="recipe-image-overlay">
            <h2>SEE DETAILS</h2>
          </div>
        </Link>
      </div>
      {authenticated && (
        <button
          type="button"
          className="recipe-delete"
          onClick={handleDelete}
        ></button>
      )}
      <h2>{name}</h2>
      <p>{description}</p>
      <RecipeBadge label="Time Needed (minutes)" value={time} />
      <RecipeBadge label="Calories" value={calories} />
    </div>
  );
}

RecipeBox.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  servings: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

RecipeBadge.propTypes = {
  value: PropTypes.number.isRequired,
};

export default RecipeBox;
