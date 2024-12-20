import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Section2.css'; 

const Section2 = ({ subheading, heading, bgclr, subheadingSize, headingSize }) => {
    const h1Ref = useRef(null); 

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const h1 = h1Ref.current;
        if (h1) {
            let clutter = "";
            h1.textContent.split(" ").forEach((word) => {
                clutter += `<span>${word}</span> `;
            });
            h1.innerHTML = clutter;

            const spans = h1.querySelectorAll('span');
            gsap.set(spans, { color: '#dadada70' }); 

            gsap.to(spans, {
                scrollTrigger: {
                    trigger: h1.parentNode, 
                    start: "top 80%",
                    end: "bottom 50%",
                    scrub: 2,
                },
                stagger: 0.2,
                color: "#fff",
            });
        }
    }, []);

    return (
        <div id="section2" style={{ backgroundColor: bgclr }} >
            <h2 style={{ fontSize: subheadingSize }}>{subheading}</h2>
            <h1 ref={h1Ref} style={{ fontSize: headingSize }}>{heading}</h1>
        </div>
    );
};

export default Section2;
