import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Register.css"

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    cnic: '',
    phone: '',
    email: '',
    matricMarks: '',
    fscMarks: '',
    degreeProgram: 'BS', // Default value for degree program
    department1: '',
    department2: '',
    department3: '',
    profilePhoto: null,
    matricDMCPhoto: null,
    fscDMCPhoto: null,
    transcriptPhoto: null,
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      await axios.post('http://localhost:5000/api/auth/register', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/StudentDashboard');
    } catch (err) {
      setError(err.response.data.message || 'Something went wrong');
    }
  };

  return (
    <>
      <div className='register-main-container'>
        <div className="register-form">
          <h2 className='register-heading'>Register</h2>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="register-personal-info">
              <h2>Personal Information</h2>
              <div className="register-input">
                <label htmlFor="name">Applicant Name</label>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
              </div>
              <div className="register-input">
                <label htmlFor="fatherName">Applicant Father Name</label>
                <input type="text" name="fatherName" placeholder="Father Name" onChange={handleChange} required />
              </div>
              <div className="register-input">
                <label htmlFor="cnic">CNIC Number</label>
                <input type="text" name="cnic" placeholder="CNIC" onChange={handleChange} required />
              </div>
              <div className="register-input">
                <label htmlFor="phone">Phone Number</label>
                <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required />
              </div>
              <div className="register-input">
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
              </div>
            </div>
            <div className="register-academic">
              <h2>Academic Details</h2>
              <div className="register-input">
                <label htmlFor="matricMarks">Matric Marks Out of 1100</label>
                <input type="text" name="matricMarks" placeholder="Matric Marks" onChange={handleChange} required />
              </div>
              <div className="register-input">
                <label htmlFor="fscMarks">FSc Marks Out of 1100</label>
                <input type="text" name="fscMarks" placeholder="FSC Marks" onChange={handleChange} required />
              </div>

              <div className="register-input">
                <label>
                  Degree Program:
                  <select name="degreeProgram" onChange={handleChange}>
                    <option value="BS">BS</option>
                    <option value="MS">MS</option>
                    <option value="M.Phil">M.Phil</option>
                    <option value="PhD">PhD</option>
                  </select>
                </label>
              </div>

              {/* Department Selection (Text Inputs) */}
              <div className="register-input">
                <label>Department (If more than 1, list in priority based):</label>
                <input className='register-dpts' type="text" name="department1" placeholder="Department 1" onChange={handleChange} required />
                <input className='register-dpts' type="text" name="department2" placeholder="Department 2" onChange={handleChange} />
                <input className='register-dpts' type="text" name="department3" placeholder="Department 3" onChange={handleChange} />
              </div>

            </div>

            <div className="register-media">
              <h2>Media Upload</h2>
              {/* File Uploads */}
              <div className="register-input">
                <label htmlFor="profilePhoto">Profile Photo</label>
                <input type="file" name="profilePhoto" onChange={handleChange} accept="image/*" required />
              </div>
              <div className="register-input">
                <label htmlFor="matricDMCPhoto">Matric DMC</label>
                <input type="file" name="matricDMCPhoto" onChange={handleChange} accept="image/*" required />
              </div>
              <div className="register-input">
                <label htmlFor="fscDMCPhoto">FSc DMC</label>
                <input type="file" name="fscDMCPhoto" onChange={handleChange} accept="image/*" required />
              </div>
              <div className="register-input">
                <label htmlFor="transcriptPhoto">BS Degree/Transcript</label>
                <input type="file" name="transcriptPhoto" onChange={handleChange} accept="image/*" />
              </div>
            </div>

            <div className="register-btn">
              <button type="submit"><span>Register</span></button>
            </div>
          </form>
          {error && <p>{error}</p>}
        </div>
      </div>
    </>
  );
};

export default Register;
