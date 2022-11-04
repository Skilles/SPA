import React from 'react';
import PropTypes from 'prop-types';

function Header({ title, image }) {
  return (
    <div className="header">
      <h1>{title}</h1>
      <img src={image} alt={`${title} Header`} />
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Header;
