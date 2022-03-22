import * as React from 'react';

const Diners = (props) => {
  return (
    <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="34" height="24" rx="4" fill="white" />
      <rect
        x="0.25"
        y="0.25"
        width="33.5"
        height="23.5"
        rx="3.75"
        stroke="black"
        strokeOpacity="0.15"
        strokeWidth="0.5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.8384 19.3H18.4345C22.4869 19.3 25.7162 16.085 25.8429 12.1135V12.0505C25.7795 8.01596 22.4869 4.7379 18.4345 4.80094H15.5218C11.6594 4.92702 8.62004 8.20508 8.74668 12.1135C8.74668 16.022 11.9126 19.237 15.8384 19.3ZM10.0131 12.0505C10.0131 8.77241 12.7358 6.06171 16.0284 6.06171C19.321 6.06171 22.0437 8.77241 22.0437 12.0505C22.0437 15.3285 19.321 18.0392 16.0284 18.0392C12.7358 18.0392 10.0131 15.3285 10.0131 12.0505ZM16.9782 16.085V8.07898C19.1943 8.64634 20.5874 10.8527 20.0175 13.0591C19.6376 14.5721 18.4978 15.7068 16.9782 16.085ZM12.1026 11.0418C11.5327 13.2482 12.8624 15.5177 15.0786 16.085V8.07898C13.6223 8.45722 12.4825 9.59193 12.1026 11.0418Z"
        fill="#0079BE"
      />
    </svg>
  );
};

export default Diners;