import React from 'react';
import "./AdminMain.css";

const AdminMain = ({ mainImg, mainTitle, mainDetails }) => {
    return (
        <div className="admin-main-container">
            <div className="admin-main">
                <div className="img-container">
                    <img src={mainImg} alt={mainTitle} />
                </div>

                <div className="admin-main-content">
                    <div className="admin-main-title">
                        <h1>{mainTitle}</h1>
                    </div>
                    <div className="admin-main-details">
                        <ul>
                            {mainDetails.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminMain;
