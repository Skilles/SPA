import React from 'react';

import ProductBox from '../ProductBox';
import Header from '../Header';

function CreateBox() {
  return (
    <div className="grey-border create-box" />
  );
}

// TODO: Query the database for products and list them here dynamically
function Home() {
  return (
    <>
      <Header title="Header Title" image="/public/header.png" />
      <div className="products-container">
        <ProductBox name="Test1" description="testingtesting1" price={300} image="/public/logo512.png" id={1} />
        <ProductBox name="Test2" description="testingtesting2" price={350} image="/public/logo512.png" id={2} />
        <ProductBox name="Test3" description="testingtesting3" price={400} image="/public/logo512.png" id={3} />
        <CreateBox />
      </div>
    </>
  );
}

export default Home;
