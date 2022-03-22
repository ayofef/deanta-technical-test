import PropTypes from 'prop-types';
import React from 'react';

const Info = ({ fill }) => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.19488 11.0834V11.5834H9.69488H11.0838C11.1912 11.5834 11.2782 11.6705 11.2782 11.7779C11.2782 11.8853 11.1912 11.9723 11.0838 11.9723H6.9171C6.80971 11.9723 6.72266 11.8853 6.72266 11.7779C6.72266 11.6705 6.8097 11.5834 6.9171 11.5834H8.30599H8.80599V11.0834V8.30564V7.80564H8.30599H7.61154C7.50415 7.80564 7.4171 7.71859 7.4171 7.61119C7.4171 7.5038 7.50416 7.41675 7.61154 7.41675H9.00043C9.10783 7.41675 9.19488 7.5038 9.19488 7.61119V11.0834Z"
        fill={fill}
        stroke={fill}
      />
      <path
        d="M8.653 6.22249C9.22827 6.22249 9.69466 5.75613 9.69466 5.18083C9.69466 4.60553 9.22827 4.13916 8.653 4.13916C8.07772 4.13916 7.61133 4.60553 7.61133 5.18083C7.61133 5.75613 8.07772 6.22249 8.653 6.22249Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.666992 9.00008C0.666992 4.39771 4.39795 0.666748 9.00033 0.666748C13.6027 0.666748 17.3337 4.39771 17.3337 9.00008C17.3337 13.6024 13.6027 17.3334 9.00033 17.3334C4.39795 17.3334 0.666992 13.6024 0.666992 9.00008ZM9.00033 2.05564C5.16501 2.05564 2.05588 5.16477 2.05588 9.00008C2.05588 12.8354 5.16501 15.9445 9.00033 15.9445C12.8356 15.9445 15.9448 12.8354 15.9448 9.00008C15.9448 5.16477 12.8356 2.05564 9.00033 2.05564Z"
        fill={fill}
      />
    </svg>
  );
};

Info.propTypes = {
  fill: PropTypes.string,
};

Info.defaultProps = {
  fill: '#4E40EF',
};

export default Info;