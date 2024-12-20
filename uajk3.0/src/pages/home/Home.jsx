import React, { useRef } from 'react';
import Hero from './components/Hero/Hero';
import Section2 from './components/section2/section2';
import ScrollingVideo from './components/section3/ScrollingVideo';
// import Section5 from './components/section5/Section5';
import Section7 from './components/section7/Section7';
import HorizontalScroll from './components/section11/HorizontalScroll';
import ImgWithTxt from './components/section9/ImgWithTxt';
import News from './components/section12/News';
import QLinks from './components/qLinks/QLinks';

const Home = () => {
  const nextSectionRef = useRef(null);

  // ImgWithTxt Content:
  const section9bContent = [
    {
      title: "What is Virtual Tour?",
      description: "A virtual tour is an immersive online experience that lets you explore a university campus through stunning 360-degree views and interactive features. Discover facilities and programs from the comfort of your home, bringing the campus to life at your fingertips!"
    },
    {
      title: "New Dimension of Campus Visits",
      description:
        "Experience the University of Azad Jammu & Kashmir (UAJK) like never before! Explore our vibrant campuses from anywhere in the world with our immersive 3D virtual tour."
    },
    {
      title: "Discover State-of-the-Art Facilities",
      description:
        "Navigate through modern classrooms, advanced research labs, and recreational areas designed to inspire creativity and collaboration. At UAJK, innovation and academic excellence come to life!"
    },
  ];

  return (
    <>
      <div id="main1">
        <Hero nextSectionRef={nextSectionRef} />

        <div ref={nextSectionRef}>
          <Section2 subheading="Explore Our Cutting-Edge Facilities"
            heading="Embark on a captivating journey through our state-of-the-art facilities with an immersive 3D virtual tour. Experience an environment designed to ignite creativity and foster collaboration among students." />
        </div>

        <ImgWithTxt heading="Immersive 3D Virtual Tour"
          imageUrl="/assets/ImgWithTxt/Virtual-Tour.jpg"
          section9bContent={section9bContent}
          bgColor="#111111"
        />

        <HorizontalScroll />

        <News />

        <Section7 />

        <Section2 subheading="A Beacon of Excellence "
          heading="Ranked No. 1 in Azad Jammu & Kashmir and 35th in Pakistan, UAJK stands as a beacon of excellence and innovation. The university provides an extraordinary educational experience that merges rigorous academic standards with groundbreaking technology." />

        {/* <Section5 /> This is Second scroll based video animation */}

        <QLinks />

        <Section2 subheading="Learn, Innovate, and Succeed"
          heading="Our programs are designed to challenge and inspire, helping students to become critical thinkers, innovators, and leaders in their fields." />

        <ScrollingVideo />

      </div>
    </>
  );
};

export default Home;
