/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React from 'react';
import { Navigate } from 'react-router-dom';

function RoutePrivate({ children, isAdmin, isUser }) {
  const userValid = localStorage.getItem('useracpbm:data');

  try {
    if (userValid) {
      const { admin } = JSON.parse(userValid);

      if (isAdmin && !admin) {
        return <Navigate to="/" />;
      }

      if (isUser && admin) {
        return <Navigate to="/" />;
      }
    }
  } catch (err) {
    throw new Error();
  }

  return userValid ? children : <Navigate to="/logout" />;
}

export default RoutePrivate;

RoutePrivate.propTypes = {
  isAdmin: PropTypes.bool,
  isUser: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
};
