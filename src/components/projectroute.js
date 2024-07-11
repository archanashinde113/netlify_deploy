
import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = ({ element, ...rest }) => {
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return token !== null; 
  };

  return isAuthenticated() ? <Route {...rest} element={element} /> : <Navigate to="/" />;
};

export default ProtectedRoute;
