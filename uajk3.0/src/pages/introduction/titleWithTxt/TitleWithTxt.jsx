import React from 'react';
import './TitleWithTxt.css';

const TitleWithTxt = ({ title, sections }) => {
    return (
        <div className="title-txt">
            <div className="title-txt-content">
                <div className="title-container">
                    <h2>{title}</h2>
                </div>
                <div className="txt-container">
                    {sections.map((section, index) => (
                        <div className="txt-content" key={index}>
                            <h4>{section.heading}</h4>
                            <p>{section.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TitleWithTxt;
