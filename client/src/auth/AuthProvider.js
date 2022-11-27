import { useState, useEffect, useContext } from 'react';

import AuthContext from './AuthContext';
import { UserApi } from '../api/user';

const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const jwt = localStorage.getItem('token');
    if (jwt) {
      UserApi.verifyUser(jwt).then((user) => {
        setAuthenticated(true);
        setUser(user);
      });
    }
  }, [setAuthenticated, setUser]);

  return (
    <AuthContext.Provider
      value={{ authenticated, setAuthenticated, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within a AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuthContext };
