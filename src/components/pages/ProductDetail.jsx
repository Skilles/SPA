import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();

  return (
    <div className="product-detail">
      <p>
        Product Id:
        {' '}
        {id}
      </p>
    </div>
  );
}

export default ProductDetail;
