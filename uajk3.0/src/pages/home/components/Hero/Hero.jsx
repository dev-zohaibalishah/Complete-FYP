import React, { useRef } from 'react';
import './Hero.css';

// import Spline from '@splinetool/react-spline';
// import Spline from '@splinetool/react-spline/next';


import arrow from '../../../../assets/arrow.png'

const Hero = ({ nextSectionRef }) => {
    const scrollToNextSection = () => {
        if (nextSectionRef.current) {
            nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div id="section1">
            <iframe src='https://my.spline.design/untitled-21a376867fb7690f2b8b8f396d3bccd0/' frameborder='0' width='107%' height='107%'></iframe>
            {/* <Spline scene="/assets/scene.splinecode" /> */}
            {/* <Spline scene="https://prod.spline.design/2xdh7FWnnnverVtw/scene.splinecode" /> */}
            <div className="bottom-section1">
                <h1>University of Azad Jammu & Kashmir</h1>
                {/* <h1>UAJK Destroys Your Future</h1> */}
                <div className="bottom-section1-inner">
                    <h4>Welcome to the whole new world of opportunities!</h4>
                    {/* <button>Learn More</button> */}
                </div>
            </div>
            {/* Arrow button */}
            <div className="arrow-container" onClick={scrollToNextSection}>
                <div className="arrow"><span>scroll</span><img src={arrow} alt="" /></div>
            </div>
        </div>
    );
};

export default Hero;
