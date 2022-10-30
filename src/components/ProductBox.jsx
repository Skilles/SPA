import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function PriceBadge({ price }) {
  return (
    <div className="price-badge">
      <h4>
        $
        {price}
      </h4>
    </div>
  );
}

function ProductBox({
  name, description, price, image, id,
}) {
  return (
    <div className="grey-border product-box">
      <img src={image} alt={name} />
      <Link to={`/product/${id}`}>
        <span className="product-detail-overlay" hidden>
          <h2>SEE DETAILS</h2>
        </span>
      </Link>
      <h3>{name}</h3>
      <p>{description}</p>
      <PriceBadge price={price} />
      <button type="button">
        <h4>BUY NOW</h4>
      </button>
    </div>
  );
}

ProductBox.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

PriceBadge.propTypes = {
  price: PropTypes.number.isRequired,
};

export default ProductBox;
