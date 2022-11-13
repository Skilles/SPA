import { useState, useEffect, useContext } from 'react';

import AuthContext from './AuthContext';

const AuthProvider = ({children}) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const user = sessionStorage.getItem('currentUser');
        if (user) {
            setUser(JSON.parse(user));
            setAuthenticated(true);
        }
    }, []);

    return (
        <AuthContext.Provider value={{authenticated, setAuthenticated, user, setUser}}>
            {children}
        </AuthContext.Provider>
    );
}

const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuthContext must be used within a AuthProvider');
    }
    return context;
}

export { AuthProvider, useAuthContext };