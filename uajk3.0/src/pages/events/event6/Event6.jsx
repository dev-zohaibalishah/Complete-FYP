import React from 'react'
import Event from '../../../components/event/Event'

const Event6 = () => {

  const images = [
    "/events/event5/event5a.jpg",
    "/events/event5/event5b.jpg",
    "/events/event5/event5c.jpg",
    "/events/event5/event5d.jpg",
    "/events/event5/event5e.jpg",
    "/events/event5/event5f.jpg",
    "/events/event5/event5g.jpg",
    "/events/event5/event5h.jpg",
    "/events/event5/event5i.jpg",
    "/events/event5/event5j.jpg",
    "/events/event5/event5k.jpg",
    "/events/event5/event5l.jpg",
    "/events/event5/event5m.jpg",
    "/events/event5/event5n.jpg",
    "/events/event5/event5o.jpg",
    "/events/event5/event5p.jpg",
    "/events/event5/event5q.jpg",
    "/events/event5/event5r.jpg",
    "/events/event5/event5s.jpg",
  ]

  const text = [
    'Today marked the grand closing ceremony of the Azad Jammu and Kashmir Inter-University Badminton (Boys) and Cricket (Girls) Championships at the University of Azad Jammu and Kashmir (UAJK). The honorable Vice-Chancellor, Prof. Dr. Muhammad Kaleem Abbasi, graced the event as the chief guest.'
  ]

  return (
    <>
      <Event title="Sports Championship with Grand Closing Ceremony"
        text={text}
        images={images}
        scrollInterval={3000} />
    </>
  )
}

export default Event6