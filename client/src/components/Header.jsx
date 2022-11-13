import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header({ title, image }) {
  return (
    
      <div className="header">
      <Link to="/">
          <h1>{title}</h1>
        
          <img src={image} alt={`${title} Header`} />
        </Link>
      </div>
    
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Header;
