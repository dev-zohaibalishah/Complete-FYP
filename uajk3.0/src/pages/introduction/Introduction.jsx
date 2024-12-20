import React from 'react'
import './introduction.css'


import HeroBanner from '../../components/heroBanner/HeroBanner'
import Section2 from '../home/components/section2/section2'
import TitleWithTxt from './titleWithTxt/TitleWithTxt'
import CampusCard from './campusCard/CampusCard'


// Campuses Images:

import campus1 from "../../assets/campuses/main-campus.jpg"
import campus2 from "../../assets/campuses/chehla-campus.jpg"
import campus3 from "../../assets/campuses/kac-campus.jpg"
import campus4 from "../../assets/campuses/neelum-campus.jpg"
import campus5 from "../../assets/campuses/jehlum-campus.jpg"

const Introduction = () => {


  const sections = [
    {
      heading: 'A Diverse Range of Programs',
      text: 'UAJK offers a wide variety of academic programs across its three campuses: Main, Neelum, and Jhelum Valley. From humanities to sciences and engineering, students can find programs that align with their interests and career goals.'
    },
    {
      heading: 'A Serene Learning Environment',
      text: 'The Neelum Campus, located in the picturesque Neelum Valley, provides a unique and tranquil setting for students to focus on their studies. While offering a more focused range of programs, the campus benefits from its serene surroundings.'
    },
    {
      heading: 'A Commitment to Excellence',
      text: 'UAJK is dedicated to providing quality education and fostering a vibrant campus life. With its experienced faculty, state-of-the-art facilities, and a strong commitment to academic excellence, the university is committed to producing well-rounded graduates.'
    }
  ];

  // Campuses Content

  const cardData = [
    {
      image: campus1,
      subtitle: 'City Campus',
      text: "The City Campus of the University of Azad Jammu & Kashmir is nestled in the heart of Muzaffarabad, offering a vibrant and bustling atmosphere. Surrounded by the city's main business center, students can easily access shops, restaurants, and other amenities. The campus is alive with the energy of city life, providing a diverse and stimulating environment for students."
    },
    {
      image: campus2,
      subtitle: 'Chehla Campus',
      text: "In contrast to the City Campus, the Chehla Campus is situated on the eastern bank of the Neelum River, offering a serene and tranquil setting. Away from the hustle and bustle of the city, students can enjoy a peaceful and focused learning environment. The campus' proximity to the river provides a picturesque backdrop, making it an ideal place for relaxation and reflection."
    },
    {
      image: campus3,
      subtitle: 'King Abdullah Campus',
      text: "The King Abdullah Campus of the University of Azad Jammu & Kashmir is a state-of-the-art facility located in Muzaffarabad. Named after the late King Abdullah of Saudi Arabia, the campus boasts modern infrastructure, well-equipped laboratories, and spacious classrooms. It offers a wide range of academic programs and is renowned for its high-quality education. The campus provides a conducive environment for students to excel in their studies and pursue their academic goals."
    },
    {
      image: campus4,
      subtitle: 'Neelum Campus',
      text: "The Neelum Campus is situated in the picturesque valley of Neelum, known for its breathtaking natural beauty. The campus offers a unique learning experience surrounded by the majestic mountains and lush greenery of the valley. Students can enjoy a serene and peaceful atmosphere while pursuing their education. The campus is ideal for those seeking a tranquil and inspiring environment to study."
},
  {
    image: campus5,
    subtitle: 'Jehlum Campus',
    text: "The Jehlum Campus is located in the city of Jehlum, offering a convenient and accessible location for students. The campus provides a well-equipped learning environment and a variety of academic programs. Students can benefit from the campus' proximity to the city's amenities and resources. The Jehlum Campus is a suitable choice for students who prefer a more urban setting."
    }
  ];


return (
  <>
    <HeroBanner pageTitle="An Introduction to the University" subTitle="UAJK, A World of Opportunities" />

    <Section2
      subheading="Aims and Objectives"
      heading="UAJK seeks to provide a world-class education that fosters academic excellence, critical thinking, and personal growth. The university is committed to nurturing a diverse and inclusive community dedicated to innovation and service."
    />

    <TitleWithTxt
      title="Gateway to Academic Success"
      sections={sections}
    />

    <div className="campus-card-list">
      <h2 className="campus-title">Campuses</h2>
      {cardData.map((card, index) => (
        <CampusCard
          key={index}
          image={card.image}
          subtitle={card.subtitle}
          text={card.text}
        />
      ))}
    </div>

  </>
)
}

export default Introduction