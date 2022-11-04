import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function RecipeBadge({ value }) {
  return <div className="price-badge">{value}</div>;
}

function RecipeBox({ name, description, time, image, calories, servings, id }) {
  return (
    <div className="grey-border recipe-box">
      <img src={image} alt={name} />
      <Link to={`/recipe/${id}`}>
        <span className="recipe-detail-overlay" hidden>
          <h2>SEE DETAILS</h2>
        </span>
      </Link>
      <h3>{name}</h3>
      <p>{description}</p>
      <RecipeBadge value={time} />
      <Link to={`/recipe/${id}`}>
        <button type="button">
          <h4>LEARN MORE</h4>
        </button>
      </Link>
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
  id: PropTypes.number.isRequired,
};

RecipeBadge.propTypes = {
  value: PropTypes.number.isRequired,
};

export default RecipeBox;
