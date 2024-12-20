import React from 'react'
import Event from '../../../components/event/Event'

const Event2 = () => {

  const images = [
    "/events/event2/event2a.jpg",
    "/events/event2/event2b.jpg",
    "/events/event2/event2c.jpg",
    "/events/event2/event2d.jpg",
    "/events/event2/event2e.jpg",
    "/events/event2/event2f.jpg",
    "/events/event2/event2g.jpg",
    "/events/event2/event2h.jpg",
    "/events/event2/event2i.jpg",
    "/events/event2/event2j.jpg",
    "/events/event2/event2k.jpg",
    "/events/event2/event2l.jpg",
    "/events/event2/event2m.jpg",
  ]

  const text = [
    'The Institute of Language at UAJK recently hosted a heartfelt ceremony in collaboration with Helping Hands for Relief & Development (HHRD), recognizing the dedication and contributions of our esteemed educators. This inspiring initiative was led by our exceptional student, Mir Ahsan, President of the Youth Empowerment Program, a key initiative under HHRD.',
    'The event was graced by Meritorious Professor Dr. Nadeem Haider Bukhari, Acting Dean of the Faculty of Humanities & Social Sciences, Dr. Zafeer Hussain Kiani, Coordinator of the Institute of Language, along with many other respected faculty members from across UAJK.', 
    'We take immense pride in students like Mir Ahsan, whose leadership and commitment continue to inspire and illuminate the path for others. This meaningful ceremony highlighted the essential role educators play in shaping the future, with active participation from teachers across various departments of UAJK. It showcased the Institute of Language and HHRD’s unwavering dedication to fostering respect and gratitude for our educators.'
  ]

  return (
    <>
      <Event title="Honoring our Educators at the Institute of Languages"
        text={text}
        images={images}
        scrollInterval={3000} />
    </>
  )
}

export default Event2