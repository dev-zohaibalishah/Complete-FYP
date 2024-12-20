import React, { useState } from 'react';
import axios from 'axios';
import "./AdminLogin.css"

const AdminLogin = () => {
  const [cnic, setCnic] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send request to admin login endpoint
      const response = await axios.post('http://localhost:5000/api/auth/adminlogin', { cnic, password });

      // Save the JWT token to localStorage
      localStorage.setItem('token', response.data.token);

      // Redirect to admin dashboard
      window.location.href = '/adminDashboard/AdminDashboard'; // Update to your desired route
    } catch (err) {
      // Set error message if login fails
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <div className='admin-login-container'>
        <div className="admin-form">
          <h2 className='admin-heading'>Admin Login</h2>
          <hr />
          <form onSubmit={handleSubmit}>

            <div className="admin-input">
              <label htmlFor="cnic">CNIC Number</label>
              <input
                type="text"
                placeholder="CNIC"
                value={cnic}
                onChange={(e) => setCnic(e.target.value)}
                required
              />
            </div>

            <div className="admin-input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="admin-btn">
              <button type="submit"><span>Login</span></button>
            </div>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
