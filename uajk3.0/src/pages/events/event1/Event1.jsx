import React from 'react'
import Event from '../../../components/event/Event'

const Event1 = () => {

    const images = [
        "/events/event1/event1a.jpg",
        "/events/event1/eventb.jpg",
        "/events/event1/event1c.jpg",
        "/events/event1/event1d.jpg",
        "/events/event1/event1e.jpg",
        "/events/event1/event1f.jpg",
        "/events/event1/event1g.jpg",
        "/events/event1/event1h.jpg"
    ]
    const text =[
      'Dr. Irfan Ul Haq from PIEAS, Islamabad, met with the Vice Chancellor of UAJK, Prof. Dr. Muhammad Kaleem Abbasi, during his visit as an external evaluator from the National Computing Education Accreditation Council (NCEAC). The two discussed the requirements and strengths of the Department of Computer Science & IT to launch the BS Cyber Security program, with the Vice Chancellor assuring full support in providing the necessary resources and facilities. Dr. Syed Ali Abbas (Chairman, CS&IT), Dr. Sharjil Saeed (Director, Student Affairs), and Dr. Imtiaz Awan (Associate Professor, CS&IT) were also present during the meeting. At the conclusion, the Vice Chancellor presented Dr. Irfan Ul Haq with a souvenir.'
    ]

  return (
    <>
        <Event title="Strengthening Cyber Education"
        text={text}
        images={images}
        scrollInterval={3000} />
    </>
  )
}

export default Event1