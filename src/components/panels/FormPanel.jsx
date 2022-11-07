import React from 'react';
import PropTypes from 'prop-types';

import OverlayPanel from './OverlayPanel';

function FormPanel({ title, fields, submitText, onSubmit }) {
  return (
    <OverlayPanel>
      <div className="form-panel">
        <h2>{title}</h2>
        <form onSubmit={onSubmit}>
          {fields.map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name}>{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                value={field.value}
                onChange={field.onChange}
              />
            </div>
          ))}
          <button type="submit">{submitText}</button>
        </form>
      </div>
    </OverlayPanel>
  );
}

FormPanel.propTypes = {
  title: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
    }),
  ).isRequired,
  submitText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
