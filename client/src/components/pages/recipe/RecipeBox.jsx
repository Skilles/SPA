import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function RecipeBadge({ label, value }) {
  return (
    <span className="recipe-badge">
      <h4>{label}</h4>
      <p>{value}</p>
    </span>
  );
}

function RecipeBox({ name, description, time, image, calories, servings, id }) {
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
      <h2>{name}</h2>
      <p>{description}</p>
      <RecipeBadge label="Time Needed" value={time} />
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
