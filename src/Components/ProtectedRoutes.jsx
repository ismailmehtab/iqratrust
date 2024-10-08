import React from 'react';
import { Navigate } from 'react-router-dom';

const Protected = ({ Component }) => {
  // Check if the user is authenticated
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  // If authenticated, render the component (AdminPanel)
  // Otherwise, redirect to the login page
  return isAuthenticated ? <Component /> : <Navigate to="/" />;
};

export default Protected;