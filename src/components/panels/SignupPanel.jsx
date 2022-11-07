import React from 'react';

import FormPanel from './FormPanel';

function SignupPanel() {
  return (
    <FormPanel
      title="Signup"
      fields={[
        {
          name: 'name',
          label: 'Name',
          type: 'name',
          required: true,
        },
        {
          name: 'email',
          label: 'Email address',
          type: 'email',
          required: true,
        },
        {
          name: 'password',
          label: 'Password',
          type: 'password',
          required: true,
        },
      ]}
      submitText="Sign Up"
      onSubmit={() => {}}
    />
  );
}

export default SignupPanel;
