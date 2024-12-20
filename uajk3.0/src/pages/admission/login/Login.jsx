import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Login.css"

const Login = () => {
  const [cnic, setCnic] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { cnic, password });
      localStorage.setItem('token', response.data.token); // Save the JWT token
      localStorage.setItem('studentCnic', cnic); // Save the CNIC

      // Check if the student has already registered
      try {
        const regResponse = await axios.get(`http://localhost:5000/api/applications/${cnic}`);

        // If registration exists, redirect to the dashboard
        if (regResponse.data) {
          navigate('/StudentDashboard');
        } else {
          // If not registered, redirect to the registration form
          navigate('/register');
        }
      } catch (regError) {
        // If an error occurs (like 404), assume they are not registered and redirect to register
        navigate('/register');
      }

    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <>
      <div className='login-container'>
        <div className="login-form">
          <h2 className='login-heading'>Login</h2>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="login-input">
              <label htmlFor="cnic">CNIC Number</label>
              <input type="text" placeholder="CNIC" value={cnic} onChange={(e) => setCnic(e.target.value)} required />
            </div>
            <div className="login-input">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="login-btn">
              <button type="submit"><span>Login</span></button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
