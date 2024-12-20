import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminDashboard.css'


const AdminDashboard = () => {
  const [admissions, setAdmissions] = useState([]);

  useEffect(() => {
    const fetchAdmissions = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/applications', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAdmissions(response.data);
      } catch (error) {
        console.error('Error fetching admissions:', error.message);
      }
    };

    fetchAdmissions();
  }, []);

  return (
    <>
      <div className='admin-dashboard-container'>
        <div className="admin-dashboard">
          <h2 className='ad-heading'>Registered Students</h2>
          <table className='ad-table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Father Name</th>
                <th>CNIC</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Degree Program</th>
                <th>Department</th>
                <th>Matric Marks</th>
                <th>FSC Marks</th>
                <th>Profile Photo</th>
                <th>Matric DMC</th>
                <th>FSC DMC</th>
                <th>Transcript</th>
              </tr>
            </thead>
            {/* <hr /> */}
            <tbody>
              {admissions.map((admission) => (
                <tr key={admission.cnic} className='ad-data-row'>
                  <td>{admission.name}</td>
                  <td>{admission.fatherName}</td>
                  <td>{admission.cnic}</td>
                  <td>{admission.email}</td>
                  <td>{admission.phone}</td>
                  <td>{admission.degreeProgram}</td>
                  <td>{admission.department1}, {admission.department2}, {admission.department3}</td>
                  <td>{admission.matricMarks}</td>
                  <td>{admission.fscMarks}</td>
                  <td>
                    {admission.profilePhoto ? (
                      <a href={`${admission.profilePhoto}`} target="_blank" rel="noopener noreferrer">
                        Profile Photo
                      </a>
                    ) : 'N/A'}
                  </td>
                  <td>
                    {admission.matricDMCPhoto ? (
                      <a href={`${admission.matricDMCPhoto}`} target="_blank" rel="noopener noreferrer">
                        Matric DMC
                      </a>
                    ) : 'N/A'}
                  </td>
                  <td>
                    {admission.fscDMCPhoto ? (
                      <a href={`${admission.fscDMCPhoto}`} target="_blank" rel="noopener noreferrer">
                        FSC DMC
                      </a>
                    ) : 'N/A'}
                  </td>
                  <td>
                    {admission.transcriptPhoto ? (
                      <a href={`${admission.transcriptPhoto}`} target="_blank" rel="noopener noreferrer">
                        Transcript
                      </a>
                    ) : 'N/A'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard