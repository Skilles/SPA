import React, { useContext } from "react";

import { useAuthContext } from "../../../auth/AuthProvider";


function User() {
    const { authenticated, user } = useAuthContext();
    if (!authenticated) {
        return <h1>Not Authenticated</h1>
    }
    return (
        <div className="user-detail">
            <h1>User Details</h1>
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
        </div>
    )
}

export default User;