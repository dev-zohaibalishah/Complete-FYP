import React from 'react'
import { Link } from 'react-router-dom'
import "./Admission.css"
import HeroBanner from '../../components/heroBanner/HeroBanner'

const Admission = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <HeroBanner pageTitle="Admission Panel" subTitle="Start Your Journey with UAJK Now" />

      <div className="admission-page admission-page-student">
        <div className="admission-content">
          <h2 className="admission-title">This is admission title</h2>
          <p className="admission-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nihil architecto impedit blanditiis molestias ipsa ratione ipsam velit laboriosam facilis omnis illum est doloremque sit, deleniti temporibus veritatis nemo. Expedita fuga natus doloremque adipisci quia, nulla est modi delectus, ab soluta facere cupiditate. Vitae soluta vel earum maxime. Assumenda rerum officia optio omnis! Nobis veritatis quos excepturi corporis consequatur adipisci perspiciatis animi earum deleniti ad.</p>
          <div className="admission-btns-wrapper">
            <div className="admission-btns admission-btns-student">
              <Link to="/signup" onClick={scrollToTop}>
                <button><span>Signup</span></button>
              </Link>
            </div>
            <div className="admission-btns admission-btns-student">
              <Link to="/login" onClick={scrollToTop}>
                <button><span>Login</span></button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="admission-page admission-page-admin">
        <div className="admission-content">
          <h2 className="admission-title">Admin Admission Title</h2>
          <p className="admission-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nihil architecto impedit blanditiis molestias ipsa ratione ipsam velit laboriosam facilis omnis illum est doloremque sit, deleniti temporibus veritatis nemo. Expedita fuga natus doloremque adipisci quia, nulla est modi delectus, ab soluta facere cupiditate. Vitae soluta vel earum maxime. Assumenda rerum officia optio omnis! Nobis veritatis quos excepturi corporis consequatur adipisci perspiciatis animi earum deleniti ad.</p>
          <div className="admission-btns-wrapper">
            <div className="admission-btns">
              <Link to="/admin/login" onClick={scrollToTop}>
                <button><span>Admin Login</span></button>
              </Link>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Admission