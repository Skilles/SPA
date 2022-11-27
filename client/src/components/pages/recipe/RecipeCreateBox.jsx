import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as PlusIcon } from '../../../images/plus-icon.svg';

function RecipeCreateBox() {
  return (
    <Link to="/recipe/create" className="grey-border recipe-box">
      <PlusIcon />
    </Link>
  );
}

export default RecipeCreateBox;
