import React from 'react';

import Header from '../Header';

function About() {
  return (
    <>
      <Header title="About Us" image="/public/about-header.png" />
      <div className="grey-border about-panel">
        <div className="about-element">
          <h2>Who</h2>
          <ul>
            <li>John Doe</li>
            <li>John Doe</li>
            <li>John Doe</li>
          </ul>
        </div>
        <div className="about-element">
          <h2>What</h2>
          <p>Something something</p>
        </div>
        <div className="about-element">
          <h2>Why</h2>
          <p>Something something</p>
        </div>
      </div>
    </>
  );
}

export default About;
