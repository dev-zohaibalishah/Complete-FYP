import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./StudentDashboard.css"


const StudentDashboard = () => {
  const [studentData, setStudentData] = useState(null);

  const cnic = localStorage.getItem('studentCnic');

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/applications/${cnic}`);
        setStudentData(response.data);
      } catch (error) {
        console.error('Error fetching student data:', error.message);
      }
    };

    if (cnic) {
      fetchStudentData();
    }
  }, [cnic]);

  return (
    <>
      <div className='student-dashboard-container'>
        <div className='student-dashboard'>
          <h2 className='student-heading'>Student Profile</h2>

          {studentData ? (
            <div className='student-data'>
              <div className="student-main-info">
                <div className="student-profile-photo">
                  <img className='student-photo' src={`${studentData.profilePhoto}`} alt="Profile" />
                </div>
                <div className="student-name">
                  <p>Name:</p>
                  <p>{studentData.name}</p>
                </div>
              </div>
              <div className="student-data-other">
                <div className="student-data-field">
                  <p>Father Name:</p>
                  <p>{studentData.fatherName}</p>
                </div>
                <div className="student-data-field">
                  <p>CNIC:</p>
                  <p>{studentData.cnic}</p>
                </div>
                <div className="student-data-field">
                  <p>Email:</p>
                  <p>{studentData.email}</p>
                </div>
                <div className="student-data-field">
                  <p>Phone:</p>
                  <p>{studentData.phone}</p>
                </div>
                <div className="student-data-field">
                  <p>Matric Marks:</p>
                  <p>{studentData.matricMarks}</p>
                </div>
                <div className="student-data-field">
                  <p>FSC Marks:</p>
                  <p>{studentData.fscMarks}</p>
                </div>
                <div className="student-data-field">
                  <p>Degree Program: </p>
                  <p>{studentData.degreeProgram}</p>
                </div>
                <div className="student-data-field">
                  <p>Departments: </p>
                  <p>{studentData.department1}, {studentData.department2}, {studentData.department3}</p>
                </div>
              </div>
            </div>
          ) : (
            <p>Loading student data...</p>
          )}
        </div>
      </div>
    </>
  );
};


export default StudentDashboard