import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  
  // Check if the token is valid; you might want to decode it and check if it's an admin token
  const isAuthenticated = token ? true : false; // Adjust this logic as needed

  return isAuthenticated ? children : <Navigate to="/admin/login" />;
};

export default PrivateRoute;
