import React from 'react';
import './CampusCard.css';

const CampusCard = ({ image, subtitle, text }) => {
    return (
        <div className="campuses">
            <div className="campus-card">
                <div className="campus-card-image">
                    <img src={image} alt={subtitle} />
                </div>
                <div className="campus-card-content">
                    <h3 className="campus-card-subtitle">{subtitle}</h3>
                    <p className="campus-card-text">{text}</p>
                </div>
            </div>
        </div>
    );
};

export default CampusCard;
