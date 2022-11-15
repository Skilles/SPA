import React from 'react';

import AuthForm from './AuthForm';
import { handleSignup } from '../../../auth/AuthHandler';

function Signup() {

  return (
    <AuthForm
      title="Signup"
      fields={[
        {
          name: 'name',
          label: 'Name',
          type: 'name',
          required: true,
          placeholder: 'Enter name',
        },
        {
          name: 'email',
          label: 'Email address',
          type: 'email',
          required: true,
          placeholder: 'Enter email',
        },
        {
          name: 'password',
          label: 'Password',
          type: 'password',
          required: true,
          placeholder: 'Enter password',
        },
      ]}
      submitText="Sign Up"
      onSubmit={handleSignup}
    />
  );
}

export default Signup;
