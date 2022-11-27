import React from 'react';

import AuthForm from './AuthForm';
import { handleSignin } from '../../../auth/AuthHandler';

function Signin() {
  return (
    <AuthForm
      title="Login"
      fields={[
        {
          name: 'email',
          label: 'Email address',
          type: 'email',
          placeholder: 'Enter email',
          required: true,
        },
        {
          name: 'password',
          label: 'Password',
          type: 'password',
          placeholder: 'Enter password',
          required: true,
        },
      ]}
      submitText="Log In"
      onSubmit={handleSignin}
    />
  );
}

export default Signin;
