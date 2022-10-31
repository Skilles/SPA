import React from 'react';

import FormPanel from './FormPanel';

function SigninPanel() {
  return (
    <FormPanel
      title="Login"
      fields={[
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
      submitText="Log In"
      onSubmit={() => {}}
    />
  );
}

export default SigninPanel;
