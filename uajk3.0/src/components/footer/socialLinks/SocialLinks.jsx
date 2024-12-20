import React from "react";
import { Link } from "react-router-dom";
import "./SocialLinks.css";

import icon from "../../../assets/right-down.png"

const SocialLinks = () => {

  const scrollToTop = () => {
    window.scrollTo ({ top:0, behavior:"smooth" })
  }

  return (
    <>
      {/* Section 14a - Content*/}
      <div id="section14a">
        <h1>
        Unleash Your <br />Potential at UAJK
        </h1>
        <Link to='/admission' onClick={scrollToTop}>
        <button>Apply Now</button>
        </Link>
      </div>

      {/* Section 14b - Social Links */}
      <div id="section14b">
        <a
          href="https://www.fb.com/OfficialUAJK/"
          target="_blank"
          rel="noreferrer"
          className="section14b-inner"
        >
          <div className="section14b-hover"></div>
          <h1>Facebook</h1>
          <img src={icon} alt="icon" />
        </a>
        <a
          href="https://twitter.com/officialuajk"
          target="_blank"
          rel="noreferrer"
          className="section14b-inner"
        >
          <div className="section14b-hover"></div>
          <h1>Twitter</h1>
          <img src={icon} alt="icon" />
        </a>
        <a
          href="https://www.youtube.com/@UAJKOfficial"
          target="_blank"
          rel="noreferrer"
          className="section14b-inner"
        >
          <div className="section14b-hover"></div>
          <h1>YouTube</h1>
          <img src={icon} alt="icon" />
        </a>
        <a
          href="mailto:pro@ajku.edu.pk"
          target="_blank"
          rel="noreferrer"
          className="section14b-inner"
        >
          <div className="section14b-hover"></div>
          <h1>Email</h1>
          <img src={icon} alt="icon" />
        </a>
      </div>
    </>
  );
};

export default SocialLinks;
