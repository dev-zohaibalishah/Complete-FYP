import React from 'react'
import Event from '../../../components/event/Event'

const Event5 = () => {

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

  const text = [
    'The University of Azad Jammu & Kashmir (UAJK) King Abdullah Campus, in collaboration with the Kashmir Cultural Academy and TEVTA, organized a remarkable event titled “Sham-e-Saqafat Kashmir” to celebrate the 77th Foundation Day of the Government of Azad Jammu & Kashmir. The event brought together key personalities to highlight the significance of Kashmir’s rich cultural heritage.', 
    'Mishal Hussain Malik, former Special Assistant to the Prime Minister of Pakistan, was the chief guest of the evening. She emphasized the importance of preserving Kashmiri culture in the face of threats from Indian policies, particularly after the abrogation of Articles 370 and 35A. She urged the youth to actively safeguard Kashmiri traditions, language, and crafts, adding, “Culture is the biggest identity of a nation, and it is our duty to ensure that our traditions are passed on to future generations.” She also called upon the global Kashmiri diaspora to raise their voices on international platforms for the people of Kashmir and promote Kashmiri culture globally.', 
    'Vice-Chancellor of UAJK, Prof. Dr. Muhammad Kaleem Abbasi, in his address, paid tribute to the sacrifices of Kashmiri freedom fighters, particularly Yasin Malik. He expressed pride in hosting Mishal Malik as the chief guest, stating, “Today, we honor Yasin Malik’s sacrifices, and the flame of freedom that was lit 77 years ago must continue to burn bright.” Dr. Abbasi further highlighted the critical role of overseas Kashmiris in promoting the Kashmir cause internationally and stated, “The world is aware of the sacrifices of Kashmiris, and their struggle remains alive on the global stage because of their relentless efforts and the support of overseas Kashmiris.”', 
    'A special highlight of the event was the participation of students from UAJK’s Department of Art & Design, who put on a spectacular display of cultural activities, showcasing their creativity and deep connection to Kashmiri heritage. Their performances and artwork added vibrant energy to the evening, celebrating the region’s rich traditions through art, music, and crafts.', 
    'Other dignitaries, including MPs Mohammad Yasin, Tahir Ali, and Lord Mayors Yasmin Dar and Majid Khan, expressed solidarity with the people of Kashmir and pledged to continue supporting the Kashmiri cause. “Kashmir is in our hearts and our blood, and we will ensure that the world continues to hear the voice of Kashmir,” said Yasmin Dar.', 
    'The event featured captivating traditional Kashmiri music, which delighted the audience and concluded with Mishal Malik distributing certificates to students of the Kashmir Cultural Academy who had completed internships. The evening was further enriched by stalls displaying traditional Kashmiri handicrafts, attire, and local products, giving a vibrant touch to the cultural celebration.', 
    'The event was a profound reminder of the importance of cultural preservation in the ongoing struggle for Kashmiri identity and freedom.'
  ]

  return (
    <>
      <Event title="77th Foundation Day with Sham-e-Saqafat Kashmir"
        text={text}
        images={images}
        scrollInterval={3000} />
    </>
  )
}

export default Event5