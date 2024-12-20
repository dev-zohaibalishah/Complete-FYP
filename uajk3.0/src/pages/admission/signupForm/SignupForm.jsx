import React, { useState } from 'react';
import axios from 'axios';
import "./SignupForm.css"

const SignupForm = () => {
  const [formData, setFormData] = useState({
    cnic: '',
    name: '',
    fatherName: '',
    phone: '',
    email: '',
    password: '',
    isAdmin: false, // Checkbox to indicate admin signup 
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', formData);
      alert(response.data.message); // Show success message
      // Handle successful signup (e.g., redirect or clear form)
      window.location.href = '/admission';
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <>
      <div className="signup-container">
        <div className="signup-form-container">
          <div className="signup-center">
            <form className='signup-form' onSubmit={handleSubmit}>
              <h3 className='signup-heading'>Signup</h3>
              <hr />
              <div className="signup-input">
                <label htmlFor="cnic">CNIC Number
                </label>
                <input type="text" name="cnic" placeholder="CNIC" onChange={handleChange} required />
              </div>
              <div className="signup-input">
                <label htmlFor="name">Name
                </label>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
              </div>
              <div className="signup-input">
                <label htmlFor="fatherName">Father Name
                </label>
                <input type="text" name="fatherName" placeholder="Father's Name" onChange={handleChange} required />
              </div>
              <div className="signup-input">
                <label htmlFor="phone">Phone Number
                </label>
                <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required />
              </div>
              <div className="signup-input">
                <label htmlFor="email">Email Address
                </label>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
              </div>
              <div className="signup-input">
                <label htmlFor="password">Password
                </label>
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
              </div>

              <div className="signup-input">
                <label>
                  <input className='signup-admin' type="checkbox" name="isAdmin" checked={formData.isAdmin} onChange={handleChange} />
                  Register as Admin
                </label>
              </div>
              <div className="signup-btn">
                <button type="submit"><span>Sign Up</span></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
