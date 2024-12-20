import React from 'react'
import "./HeroBanner.css"

const HeroBanner = ({ pageTitle, subTitle }) => {
  return (
    <>
      <div className="hero-banner">
        <div className="hero-content">
          <h4>{pageTitle}</h4>
          <h2>{subTitle}</h2>
        </div>
      </div>
    </>
  )
}

export default HeroBanner