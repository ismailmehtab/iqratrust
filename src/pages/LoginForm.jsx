import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/Loginform.css';
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Static email and password for demonstration purposes
  const staticEmail = 'ismailmehtab@gmail.com';
  const staticPassword = '12345';

  const handleLogin = (e) => {
    e.preventDefault();
    // Check if credentials match the static values
    if (email === staticEmail && password === staticPassword) {
      setError('');
      // Set authentication flag in localStorage
      localStorage.setItem('isAuthenticated', 'true');
      // Navigate to admin panel after successful login
      navigate('/admin');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="wrapper">
      <div className="form-container">
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <div>ismailmehtab@gmail.com</div>
      <div>12345</div>
          <div className="input-box">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <FaUser className='icon' />
          </div>
          <div className="input-box">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            <FaLock className='icon' />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;