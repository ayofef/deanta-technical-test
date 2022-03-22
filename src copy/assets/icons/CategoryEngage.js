import React from 'react';
import { number, string } from 'prop-types';
import THEME from '../../constants/theme';

const CategoryEngage = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.50011 18.3334C2.36413 18.3406 2.22846 18.3144 2.10495 18.257C1.98145 18.1997 1.87387 18.113 1.79165 18.0044C1.70942 17.8959 1.65505 17.7688 1.63328 17.6344C1.61151 17.5 1.62301 17.3623 1.66677 17.2334L3.14177 12.8084C2.70618 11.7896 2.48765 10.6913 2.50011 9.58335C2.50449 7.48795 3.33769 5.47939 4.8178 3.99615C6.29791 2.51292 8.30472 1.67549 10.4001 1.66669H10.8334C12.7913 1.76354 14.6432 2.58481 16.0292 3.97089C17.4153 5.35698 18.2366 7.20887 18.3334 9.16669V9.62502C18.3181 11.7161 17.4777 13.7165 15.9952 15.1912C14.5127 16.6659 12.5079 17.4957 10.4168 17.5C9.3113 17.4992 8.2183 17.2664 7.20844 16.8167L2.76677 18.3334C2.67829 18.3454 2.58859 18.3454 2.50011 18.3334ZM10.4001 3.33335C9.33651 3.33622 8.29124 3.61048 7.36323 4.13015C6.43523 4.64983 5.6552 5.39773 5.09697 6.30307C4.53875 7.20841 4.2208 8.24123 4.17323 9.30377C4.12566 10.3663 4.35003 11.4234 4.82511 12.375C4.87557 12.4733 4.90597 12.5807 4.91456 12.6908C4.92314 12.801 4.90973 12.9118 4.87511 13.0167L3.81677 16.1834L6.98344 15.125C7.08837 15.0904 7.19914 15.077 7.3093 15.0856C7.41946 15.0942 7.52681 15.1246 7.62511 15.175C8.48617 15.6077 9.43644 15.8331 10.4001 15.8334C11.2223 15.8355 12.0368 15.6755 12.797 15.3624C13.5572 15.0493 14.2482 14.5893 14.8303 14.0087C15.4124 13.4281 15.8743 12.7384 16.1894 11.979C16.5046 11.2196 16.6668 10.4055 16.6668 9.58335V9.16669C16.5746 7.64121 15.9237 6.20313 14.8385 5.12711C13.7532 4.05109 12.3097 3.41252 10.7834 3.33335H10.4001Z"
      fill={color}
    />
  </svg>
);

CategoryEngage.propTypes = {
  size: number,
  color: string,
};

CategoryEngage.defaultProps = {
  size: 20,
  color: THEME.secondaryColors.greenBright,
};

export default CategoryEngage;