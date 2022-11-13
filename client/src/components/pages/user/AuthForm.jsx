import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useAuthContext } from '../../../auth/AuthProvider';
import { useNavigate } from 'react-router-dom';

function AuthForm({ title, fields, submitText, onSubmit }) {

  const { setAuthenticated, setUser } = useAuthContext();
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit(new FormData(e.target), setAuthenticated, setUser);
      navigate('/', { replace: true });
    } catch (err) {
      // Show error message under field
      setError(err);
    }
  }

  return (
    <div className="grey-border form-panel">
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        {(error) && (<p className='form-error'>{error.message}</p>)}
        {fields.map((field) => (
          <div className="form-div" key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.value}
              onChange={field.onChange}
            />
          </div>
        ))}
        <button type="submit">{submitText}</button>
      </form>
    </div>
  );
}

AuthForm.propTypes = {
  title: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ).isRequired,
  submitText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AuthForm;