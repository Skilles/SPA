import { createContext } from 'react';

const AuthContext = createContext({
  authenticated: false,
  setAuthenticated: (auth) => {},
  user: undefined,
  setUser: (user) => {},
});

export default AuthContext;
