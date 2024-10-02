import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import '../pages/Loginform.css'
import { FaUser,FaLock } from "react-icons/fa";


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const staticEmail = 'ismailmehtab@gmail.com';
  const staticPassword = '12345';

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === staticEmail && password === staticPassword) {
      setError('');
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="wrapper">
     <div className="form-container">
      <form onSubmit={handleLogin}>
      <h2>Login</h2>
        <div >
        {/* <div className='input'> */}
          {/* <label>Email:</label> */}
          <div className="input-box" >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <FaUser className='icon' />
          </div>

        {/* </div> */}
        {/* <div className='input'> */}
          {/* <label>Password:</label> */}
          <div className="input-box">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
          <FaLock className='icon'/>
          </div>
        {/* </div> */}
        </div>
        

        {error && <p style={{ color: '#fff' }}>{error}</p>}
        
        
        <button type="submit">Login</button>
      </form>
      </div>
    </div>
  );
};
export default LoginForm