import React from 'react'
import Event from '../../../components/event/Event'

const News2 = () => {

  const images = [
    "/events/news2/news2a.jpg",
    "/events/news2/news2b.jpg",
    "/events/news2/news2c.jpg",
    "/events/news2/news2d.jpg",
    "/events/news2/news2e.jpg",
    "/events/news2/news2f.jpg",
    "/events/news2/news2g.jpg",
   
  ]

  const text = [
    'The 103rd meeting of the Board of Advanced Studies and Research (BASR) at UAJK, chaired by Vice-Chancellor Prof. Dr. Muhammad Kaleem Abbasi, successfully addressed 28 key agenda items. Director of Advanced Studies & Research, Prof. Dr. Syeda Siddiqa Firdous, meticulously presented each item, covering approvals for research synopses, formation of exam committees, and refining research titles for M.Phil and PhD scholars.', 
    'This collaborative session highlights UAJK’s ongoing commitment to academic excellence and the advancement of meaningful research. A heartfelt thanks to all contributors for their valuable input'
  ]

  return (
    <>
      <Event title="103rd BASR Meeting – Fostering High-Quality Research"
        text={text}
        images={images}
        scrollInterval={3000} />
    </>
  )
}

export default News2