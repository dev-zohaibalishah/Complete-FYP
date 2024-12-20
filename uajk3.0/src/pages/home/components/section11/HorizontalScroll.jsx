import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HorizontalScroll.css";

import event1 from '../../../../assets/Events/cs-tn.jpg'
import event3 from '../../../../assets/Events/itd.jpg'
import event2 from '../../../../assets/Events/islrealf.jpg'
import event4 from '../../../../assets/Events/event4.jpg'
import event5 from '../../../../assets/Events/pecv.jpg'
import event6 from '../../../../assets/Events/sportsday-1.jpg'

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  useEffect(() => {
    const eventContainer = `#section11 .event-container`;

    gsap.to(eventContainer, {
      x: "-153%",
      scrollTrigger: {
        trigger: "#section11",
        scroller: "body",
        start: "top 0%",
        end: "top -150%",
        scrub: 2,
        pin: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="section11">
      <div className="event-container">
        <h1>Current Events</h1>
        <div className="event-card-container">
          <Link to="/event1" onClick={scrollToTop}>
            <div className="event-card">
              <img src={event1} alt="" />
              <h4>Strengthening Cyber Education</h4>
            </div>
          </Link>
          <Link to="/event2" onClick={scrollToTop}>
            <div className="event-card">
              <img src={event3} alt="" />
              <h4>Honoring our Educators at the Institute of Languages</h4>
            </div>
          </Link>
          <Link to="/event3" onClick={scrollToTop}>
            <div className="event-card">
              <img src={event2} alt="" />
              <h4>Deserving Students From The University Have Been Awarded Scholarships</h4>
            </div>
          </Link>
          <Link to="/event4" onClick={scrollToTop}>
            <div className="event-card">
              <img src={event4} alt="" />
              <h4>77th Foundation Day with Sham-e-Saqafat Kashmir</h4>
            </div>
          </Link>
          <Link to="/event5" onClick={scrollToTop}>
            <div className="event-card">
              <img src={event5} alt="" />
              <h4>PEC Praises UAJK'S Engineering Programs During Re-Accreditation Visit</h4>
            </div>
          </Link>
          <Link to="event6" onClick={scrollToTop}>
            <div className="event-card">
              <img src={event6} alt="" />
              <h4>UAJK Concludes Successful Sports Championship with Grand Closing Ceremony</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;