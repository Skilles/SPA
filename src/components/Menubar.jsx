import React from 'react';
import { NavLink } from 'react-router-dom';

function UserGreeting() {
  const name = 'John';
  return (
    <p>{name}</p>
  );
}

function AuthSection() {
  const isAuthed = false;

  if (isAuthed) {
    return (
      <UserGreeting />
    );
  }
  return (
    <>
      <button type="button">Signup</button>
      <button type="button">Login</button>
    </>
  );
}

function Menubar() {
  return (
    <div className="menubar">
      <span className="menubar-left">
        <NavLink to="/" href="/">Home</NavLink>
        <NavLink to="/about" href="/about">About</NavLink>
      </span>
      <span className="menubar-right">
        <AuthSection />
      </span>
    </div>
  );
}

export default Menubar;
