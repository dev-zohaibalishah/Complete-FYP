import React from 'react'
import Event from '../../../components/event/Event'

const Event3 = () => {

  const images = [
    "/events/event3/event3a.jpg",
    "/events/event3/event3b.jpg",
    "/events/event3/event3c.jpg",
    "/events/event3/event3d.jpg",
    "/events/event3/event3e.jpg",
    "/events/event3/event3f.jpg",
    "/events/event3/event3g.jpg",
    "/events/event3/event3h.jpg",
    "/events/event3/event3i.jpg",
    "/events/event3/event3j.jpg",
    "/events/event3/event3k.jpg",
    "/events/event3/event3l.jpg",
    "/events/event3/event3m.jpg",
    "/events/event3/event3n.jpg",
    "/events/event3/event3o.jpg",
    "/events/event3/event3p.jpg",
    "/events/event3/event3q.jpg",
    "/events/event3/event3r.jpg",
    "/events/event3/event3s.jpg",
    "/events/event3/event3t.jpg",
    "/events/event3/event3u.jpg",
    "/events/event3/event3v.jpg"
  ]

  const text = [
    'In a special ceremony held at our City Campus, Vice-Chancellor Prof. Dr. Muhammad Kaleem Abbasi and Dr. Riaz Ahmed from Islamic Relief Pakistan presented the scholarship cheques to support these students in their academic journeys.', 
     'Vice-Chancellor Dr. Kaleem Abbasi praised Islamic Relief Pakistan for their invaluable support, stating, “In these challenging times, organizations that help students overcome financial obstacles and complete their education are truly commendable.” Dr. Riaz Ahmed highlighted the organization’s ongoing commitment: “We are proud to continue supporting UAJK students, ensuring they have the resources needed to achieve their academic goals.”',
     'This generous contribution will help ease financial challenges and empower our students to focus on their studies. We extend our deepest gratitude to Islamic Relief Pakistan for their unwavering commitment to education and our students’ future.', 
     'Together, we’re building brighter futures!'
  ]

  return (
    <>
      <Event title="Deserving Students From The UAJK Have Been Awarded Scholarships"
        text={text}
        images={images}
        scrollInterval={3000} />
    </>
  )
}

export default Event3