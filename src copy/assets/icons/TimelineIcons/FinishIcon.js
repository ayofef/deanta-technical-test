import React from 'react';
import { string } from 'prop-types';

const FinishIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.6667 11.3334C9.53333 11.3334 8.6 11 7.73333 10.6C6.93333 10.3334 6.2 10 5.33333 10C3.73333 10 3.13333 10.4667 3.13333 10.4667C2.93333 10.6667 2.66667 10.7334 2.4 10.6C2.13333 10.4667 2 10.2667 2 10V2.00002C2 1.80002 2.06667 1.66669 2.2 1.53335C2.33333 1.40002 3.2 0.666687 5.33333 0.666687C6.46667 0.666687 7.4 1.00002 8.26667 1.40002C9.06667 1.66669 9.8 2.00002 10.6667 2.00002C12.2667 2.00002 12.8667 1.53335 12.8667 1.53335C13.0667 1.33335 13.3333 1.26669 13.6 1.40002C13.8667 1.53335 14 1.73335 14 2.00002V10C14 10.2 13.9333 10.3334 13.8 10.4667C13.6667 10.6 12.8 11.3334 10.6667 11.3334ZM5.33333 8.66669C6.46667 8.66669 7.4 9.00002 8.26667 9.40002C9.06667 9.73335 9.8 10 10.6667 10C11.7333 10 12.4 9.80002 12.6667 9.66669V3.06669C12.2 3.20002 11.5333 3.33335 10.6667 3.33335C9.53333 3.33335 8.6 3.00002 7.73333 2.60002C6.93333 2.33335 6.2 2.00002 5.33333 2.00002C4.26667 2.00002 3.6 2.20002 3.33333 2.33335V8.93335C3.8 8.80002 4.46667 8.66669 5.33333 8.66669Z"
      fill="black"
    />
    <path
      d="M2.66667 15.3333C2.26667 15.3333 2 15.0666 2 14.6666V9.99998C2 9.59998 2.26667 9.33331 2.66667 9.33331C3.06667 9.33331 3.33333 9.59998 3.33333 9.99998V14.6666C3.33333 15.0666 3.06667 15.3333 2.66667 15.3333Z"
      fill="black"
    />
  </svg>
);

FinishIcon.propTypes = {
  size: string,
};

FinishIcon.defaultProps = {
  size: '16',
};

export default FinishIcon;