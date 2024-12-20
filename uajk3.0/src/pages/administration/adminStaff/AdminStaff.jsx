import React from 'react';
import './AdminStaff.css';

const AdminStaff = ({ staffTitle, staff }) => {
  return (
    <>
      <div className="staffTitle">
        <h2>{staffTitle}</h2>
      </div>
      <div className="admin-staff-container">
        {staff.map((member, index) => (
          <div key={index} className="admin-card">
            <div className="admin-card-image">
              <img className='admin-card-img' src={member.image} alt={member.name} />
            </div>
            <div className="admin-card-content">
              <h3 className="admin-card-name">{member.name}</h3>
              <p className="admin-card-designation">{member.designation}</p>
              <ul className="admin-card-details">
                {member.contactDetails.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdminStaff;
