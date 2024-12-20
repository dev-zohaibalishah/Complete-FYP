import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

import logo from "../../../assets/uajk-monogram.png"

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    return (
        <>
            <div id="section15">
                <div className="main-footer">

                    <Link className='footer-logo' to="/" onClick={scrollToTop}>
                        <div className="footer-branding-container">
                            <div className="footer-branding">
                                <img src={logo} alt="logo" />
                                <h2>The University Of Azad <br />Jammu And Kashmir</h2>
                            </div>
                        </div>
                    </Link>
                    <div className="footer-menus-container">
                        <div className="footer-menus">
                            <Link className="footer-links-hvr" to="/" onClick={scrollToTop}>Home</Link>
                            <Link className="footer-links-hvr" to="/introduction" onClick={scrollToTop}>Introduction</Link>
                            <Link className="footer-links-hvr" to="/messages" onClick={scrollToTop}>Messages</Link>
                            <Link className="footer-links-hvr" to="/administration" onClick={scrollToTop}>Admin Offices</Link>
                        </div>
                        <div className="footer-menus">
                            <Link className="footer-links-hvr" to="#" onClick={scrollToTop}>Admission</Link>
                            <Link className="footer-links-hvr" to="/virtual-tour" onClick={scrollToTop}>Virtual Tour</Link>
                            <a className="footer-links-hvr" href="https://ajku.edu.pk/new/downloads/" onClick={scrollToTop}>Downloads</a>
                            <Link className="footer-links-hvr" to="contact" onClick={scrollToTop}>Contact</Link>
                        </div>
                        <div className="footer-contact">
                            <p>Phone: (+92) 5822-960466-470 <br />
                                Fax: (+92) 5822-960407 <br />
                                Contact us at: registrar@ajku.edu.pk</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footer-copyright">
                    <p>UAJK © All rights reserved</p>
                    <p>Developed by: Zohaib Ali Shah & Sami Gul</p>
                </div>
            </div>
        </>
    )
}

export default Footer