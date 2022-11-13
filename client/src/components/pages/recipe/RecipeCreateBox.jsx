import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as PlusIcon } from "../../../images/plus-icon.svg";

function RecipeCreateBox() {
  return (
    <div className="grey-border recipe-box">
        <Link to="/recipe/create">
            <PlusIcon />
        </Link>
    </div>
  );
}

export default RecipeCreateBox;