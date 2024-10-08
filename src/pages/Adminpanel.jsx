import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the authentication flag in localStorage
    localStorage.removeItem('isAuthenticated');
    // Redirect to the login page
    navigate('/');
  };

  return (
    <div>
      <h1>Welcome to the Admin Panel</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminPanel;