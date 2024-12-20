import React from 'react'
import { Link } from 'react-router-dom'
import "./News.css"

import news1 from "../../../../assets/Events/event4.jpg"
import news2 from "../../../../assets/News/news2.jpg"
import news3 from "../../../../assets/News/news3.jpg"
import news4 from "../../../../assets/News/news4.jpg"

const News = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    return (
        <>
            <div id="section12">
                <h1>Latest News</h1>
                <Link to='/event4' onClick={scrollToTop}>
                <div className="section12-inner">
                    <div className="section12-inner-left">
                        <img src={news1} alt=""/>
                    </div>
                    <div className="section12-inner-right">
                        <h4> Visit / Sep 19, 2024</h4>
                        <h1>77th Foundation Day with Sham-e-Saqafat Kashmir</h1>
                    </div>
                </div>
                </Link>
                <Link to="/news2" onClick={scrollToTop}>
                <div className="section12-inner">
                    <div className="section12-inner-left">
                        <img src={news2} alt=""/>
                    </div>
                    <div className="section12-inner-right">
                        <h4> Meeting / Sep 19, 2024</h4>
                        <h1>103rd BASR Meeting – Fostering High-Quality Research</h1>
                    </div>
                </div>
                </Link>
                <Link to="/event2" onClick={scrollToTop}>
                <div className="section12-inner">
                    <div className="section12-inner-left">
                        <img src={news3} alt=""/>
                    </div>
                    <div className="section12-inner-right">
                        <h4> Event / Sep 19, 2024</h4>
                        <h1>Honoring our Educators at the Institute of Languages</h1>
                    </div>
                </div>
                </Link>
                <Link to="/event6" onClick={scrollToTop}>
                <div className="section12-inner">
                    <div className="section12-inner-left">
                        <img src={news4} alt=""/>
                    </div>
                    <div className="section12-inner-right">
                        <h4> Sports / Sep 19, 2024</h4>
                        <h1>UAJK Concludes Successful Sports Championship with Grand Closing Ceremony</h1>
                    </div>
                </div>
                </Link>
            </div>
        </>
    )
}

export default News