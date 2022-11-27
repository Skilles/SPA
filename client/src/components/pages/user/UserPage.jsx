import React from 'react';

import { useAuthContext } from '../../../auth/AuthProvider';

function User() {
  const { authenticated, user } = useAuthContext();
  if (!authenticated) {
    return <h1>Not Authenticated</h1>;
  }
  return (
    <div className="user-detail">
      <h1 class="grey-border">User Details</h1>
      <h3>Username: {user.name}</h3>
      <h3>Email: {user.email}</h3>
    </div>
  );
}

export default User;
