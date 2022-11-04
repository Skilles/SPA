import React from 'react';
import PropTypes from 'prop-types';

function OverlayPanel({ children }) {
  return <div className="overlay-panel">{children}</div>;
}

OverlayPanel.propTypes = {
  children: PropTypes.node.isRequired,
};
