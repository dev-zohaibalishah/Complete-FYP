import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import "./Nav.css";

import logo from "../../assets/uajk-monogram.png";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const openMenu = () => {
        gsap.timeline()
            .to(".menu-bg-container", { display: 'block', opacity: 1, duration: 0.5 })
            .to("#menu", { right: 0, duration: 0.7 })
            .from("#menu h4", { x: 150, duration: 0.7, stagger: 0.25, opacity: 0 })
            .to("#menu-social", { opacity: 1, duration: 0.7, y: 50 })
            .from("#menu-social a", { opacity: 0, duration: 0.7 });
        setMenuOpen(true);
    };

    const closeMenu = () => {
        const screenWidth = window.innerWidth;
        const closePosition = screenWidth < 600 ? "-101%" : "-41%";

        gsap.timeline()
            .to("#menu", { right: closePosition, duration: 0.7 })
            .to(".menu-bg-container", { opacity: 0, duration: 0.5, onComplete: () => gsap.set(".menu-bg-container", { display: 'none' }) });
        setMenuOpen(false);
    };

    const toggleMenu = () => {
        if (menuOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    const handleLinkClick = () => {
        closeMenu();
    };

    useEffect(() => {
        if (menuOpen) {
            closeMenu();
        }
    }, [location.pathname]); 

    return (
        <div className="nav-wrapper">
            <nav>
                <div className="nav-logo">
                    <Link to="/" onClick={handleLinkClick}>
                        <img className="nav-logo-img" src={logo} alt="UAJK Logo" />
                        <p className="nav-title">
                            The University of Azad <br /> Jammu And Kashmir
                        </p>
                    </Link>
                </div>
                <div className="btns">
                    <Link to="/virtual-tour">
                    <button className="nav-tour">Virtual Tour</button>
                    </Link>
                    <button className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div className="menu-bg-container" onClick={closeMenu}></div> 
                <div id="menu">
                    <h4 className="menu-link">
                        <Link to="/" onClick={handleLinkClick}>Home</Link>
                    </h4>
                    <h4 className="menu-link">
                        <Link to="/introduction" onClick={handleLinkClick}>Introduction</Link>
                    </h4>
                    <h4 className="menu-link">
                        <Link to="/messages" onClick={handleLinkClick}>Message</Link>
                    </h4>
                    <h4 className="menu-link">
                        <Link to="/administration" onClick={handleLinkClick}>Admin Offices</Link>
                    </h4>
                    <h4 className="menu-link">
                        <Link to="/virtual-tour" onClick={handleLinkClick}>Virtual Tour</Link>
                    </h4>
                    <h4 className="menu-link">
                        <Link to="/admission" onClick={handleLinkClick}>Admission</Link>
                    </h4>
                    <div id="menu-social">
                        <a className="social-links" href="https://www.fb.com/OfficialUAJK/" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a className="social-links" href="https://twitter.com/officialuajk" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a className="social-links" href="https://www.youtube.com/@UAJKOfficial" target="_blank" rel="noopener noreferrer">YouTube</a>
                        <a className="social-links" href="mailto:pro@ajku.edu.pk" target="_blank" rel="noopener noreferrer">Email</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
