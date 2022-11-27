import React from 'react';

function About() {
  return (
    <>
      <div className="grey-border about-panel">
        <div className="about-element">
          <h2>Who</h2>
          <ul>
            <li>Cameron Holbrook</li>
            <li>Iain Hemenway</li>
            <li>Bilal Madi</li>
          </ul>
        </div>
        <div className="about-element">
          <h2>What</h2>
          <p>
            Welcome to our Recipe Book Site! Sign in to add, edit, and delete
            recipes
          </p>
        </div>
        <div className="about-element">
          <h2>Why</h2>
          <p>
            We chose to make a Recipe Book site to best showcase the card
            functionality
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
