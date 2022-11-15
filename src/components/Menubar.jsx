import React from 'react';
import { NavLink } from 'react-router-dom';

import AuthBar from './AuthBar';


function Menubar() {
  return (
    <div className="menubar">
      <span className="menubar-left">
        <NavLink to="/" href="/" end>
        <button type="button">Home</button>
        </NavLink>
        <NavLink to="/about" href="/about">
        <button type="button">About</button>
        </NavLink>
      </span>
      <span className="menubar-right">
        <AuthBar />
      </span>
    </div>
  );
}

export default Menubar;
