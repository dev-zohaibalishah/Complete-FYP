import React from "react";
import "./ImgWithTxt.css";

const ImgWithTxt = ({ heading, imageUrl, section9bContent, bgColor }) => {
  return (
    <>
      {/* Section 9a */}
      <div id="section9a" style={{ backgroundColor: bgColor }}>
        <div className="section9a-left">
          <h1>{heading}</h1>
        </div>
        <div className="section9a-right">
          <div
            className="section9a-right-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
        </div>
      </div>

      {/* Section 9b */}
      <div id="section9b" style={{ backgroundColor: bgColor }}>
        <div className="section9b-right">
          {section9bContent.map((content, index) => (
            <div className="right9b-content" key={index}>
              <h3>{content.title}</h3>
              <p>{content.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImgWithTxt;
