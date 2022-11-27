import React from 'react';
import { NavLink } from 'react-router-dom';

import { useAuthContext } from '../auth/AuthProvider';

function AuthBar() {
  const { authenticated, setAuthenticated, user, setUser } = useAuthContext();

  const handleLogout = () => {
    setAuthenticated(false);
    setUser(undefined);
    localStorage.removeItem('token');
  };

  if (authenticated) {
    return (
      <>
        <NavLink to="/user">
          <button type="button" className="user-name">
            {user.name}
          </button>
        </NavLink>
        {
          <div className="logout">
            <button type="button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        }
      </>
    );
  }
  return (
    <>
      <NavLink to={'/signup'}>
        <button type="button">Signup</button>
      </NavLink>
      <NavLink to={'/signin'}>
        <button type="button">Login</button>
      </NavLink>
    </>
  );
}

export default AuthBar;
