import React from 'react';
import PropTypes from 'prop-types';

const Connections = ({ fill }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M28 14H12C10.3 14 9 12.7 9 11C9 9.3 10.3 8 12 8H28C29.7 8 31 9.3 31 11C31 12.7 29.7 14 28 14ZM12 10C11.4 10 11 10.4 11 11C11 11.6 11.4 12 12 12H28C28.6 12 29 11.6 29 11C29 10.4 28.6 10 28 10H12Z"
      fill={fill}
    />
    <path
      d="M28 31.7H12C10.3 31.7 9 30.4 9 28.7C9 27 10.3 25.7 12 25.7H28C29.7 25.7 31 27 31 28.7C31 30.4 29.7 31.7 28 31.7ZM12 27.7C11.4 27.7 11 28.1 11 28.7C11 29.3 11.4 29.7 12 29.7H28C28.6 29.7 29 29.3 29 28.7C29 28.1 28.6 27.7 28 27.7H12Z"
      fill={fill}
    />
    <path
      d="M20 17.7C20.5523 17.7 21 17.2523 21 16.7C21 16.1477 20.5523 15.7 20 15.7C19.4477 15.7 19 16.1477 19 16.7C19 17.2523 19.4477 17.7 20 17.7Z"
      fill={fill}
    />
    <path
      d="M20 20.7C20.5523 20.7 21 20.2523 21 19.7C21 19.1477 20.5523 18.7 20 18.7C19.4477 18.7 19 19.1477 19 19.7C19 20.2523 19.4477 20.7 20 20.7Z"
      fill={fill}
    />
    <path
      d="M20 23.7C20.5523 23.7 21 23.2523 21 22.7C21 22.1477 20.5523 21.7 20 21.7C19.4477 21.7 19 22.1477 19 22.7C19 23.2523 19.4477 23.7 20 23.7Z"
      fill={fill}
    />
  </svg>
);
Connections.propTypes = {
  fill: PropTypes.string,
};
Connections.defaultProps = {
  fill: '#787F88',
};
export default Connections;