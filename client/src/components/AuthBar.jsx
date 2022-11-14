import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useAuthContext } from '../auth/AuthProvider';
  
function AuthBar() {
    const { authenticated, setAuthenticated, user } = useAuthContext();

    const [showLogout, setShowLogout] = useState(false);

    const handleLogout = () => {
        setAuthenticated(false);
        sessionStorage.removeItem('currentUser');
    }

    if (authenticated) {
        return (
            <span onMouseEnter={() => setShowLogout(true)} onMouseLeave={() => setShowLogout(false)}>
                <NavLink to='/user' >
                    <button type="button" className='user-name'>{user.name}</button>
                </NavLink>
                {showLogout && (<span className="logout">
                    <button type="button" onClick={handleLogout}>Logout</button>
                </span>)}
            </span>
        )
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