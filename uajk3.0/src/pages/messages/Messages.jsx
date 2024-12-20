import React from 'react'
import "./Messages.css"
import HeroBanner from '../../components/heroBanner/HeroBanner'
import ImgWithTxt from '../home/components/section9/ImgWithTxt'
import Section2 from '../home/components/section2/section2'



const Messages = () => {

    const chancellormsg = [
        {
            description: "It is a matter of great satisfaction and immense pleasure for me as chancellor to note that the University of Azad Jammu and Kashmir, a premier institution of higher learning in the state has made great progress over the last 40 years by providing quality education to the students and conducting research of the highest standard across a broad spectrum of disciplines."
        },
        {
            description:
                "Since its inception in 1980, the University has not only grown to become one of the largest seats of learning but also has secured its place as one of AJK’s leading research institutions by achieving a number of ambitious goals in research, teaching, and learning."
        },
        {
            description: "I feel delighted that the University has not only taken some significant measures to ensure good governance and transparency in its functioning but also inducted highly qualified, competent faculty in its quest to improve the quality of education. It is encouraging that the university has sent a record number of faculty members for Ph.D. under the Turkish Scholarship Programme and also has established collaborative linkages with national and international institutions to learn from their experiences."
        },
        {
            description: "Besides achieving 5th position among National Universities of Pakistan in quality assurance and first among AJK based Universities, the UAJK has also successfully bridged the gender gap by enrolling more women and girls than male students in its various degree programs. am also pleased to learn that University has completed construction of the state-of-the-art King Abdullah Campus within a short span of time and Chatter Klass and shifted 14 of its major departments and some administrative offices there."
        },
        {
            description: "The new campus provides extensive accommodation and well-equipped labs where students will be able to sharpen their skills in a relatively better learning environment. I acknowledge and appreciate the able leadership of the Vice-Chancellor, Professor Dr. Muhammad Kaleem Abbasi, for steering the University towards steady progress both in academics and research during his stint at the varsity."
        },
        {
            description: "Sultan Mehmood Chaudhry"
        },
        {
            title: "President / Chancellor"
        }
    ];

    const vcmsg = [
        {
            title: "My Dear Students,",
            description: "Since its inception in 1980, the University of Azad Jammu and Kashmir (UAJK) has maintained an upward trajectory of sustainable growth despite various challenges. The university’s progress during the past year has been remarkable in terms of its physical infrastructure, faculty development, transparent governance and starting new academic courses and programs."
        },
        {
            description:
                "Although the academic year 2020-21 will be remembered as one of the most challenging and uncertain times in the history of our institution because of Covid-19 outbreak, however, our University community rose collectively to the challenge and continued to deliver outstanding outcomes in both education and research by adopting alternative measures."
        },
        {
            description: "The completion of King Abdullah Campus and shifting of some major departments there, acquiring NOC from HEC for Neelum Campus of the university and accreditation of Sofware and Electrical Engineering Programs from Pakistan Engineering Council are some of the important milestones we have crossed this year."
        },
        {
            description: "As we enter the new academic year, I want to extend my thanks to you all for keeping the university going during the challenging time."
        },
        {
            description: "The Annual Report provide an overview of the institution’s performance in the year 2020-21 by highlighting the wide spectrum of various academic and co-curricular activities at the University and range of important contributions made by the faculty members. We hope that the Annual Report 2020-21 presents successfully the academic culture of UAJK and its affiliated colleges to its readers."
        },
        {
            description: "We thank our Chancellor Barrister Sultan Mahmood Chaudhry for his constant support and encouragement in bringing out this report. We are thankful to the Heads of the Departments and institutes for providing the committee with the information included in this report. The Committee would like to express its gratitude to Public Relations Office of the university for collecting and compiling the information from the Heads of the University Departments. The Committee thanks all those who have contributed directly or indirectly in preparing and publishing this Annual Report."
        },
        {
            description: "Prof. Dr. Muhammad Kaleem Abbasi"
        },
        {
            title: "Vice Chancellor",
            description: "The University of Azad Jammu & Kashmir"
        }
    ];


    return (
        <>
            <div className="messages-container">
                <HeroBanner pageTitle="Important Messages" subTitle="Hear Directly From Our Leaders." />
                <ImgWithTxt
                    heading="Chancellor Message"
                    imageUrl="/assets/president.jpg"
                    section9bContent={chancellormsg}
                    bgColor="#111111"
                />
                <ImgWithTxt
                    heading="Vice Chancellor Message"
                    imageUrl="/assets/vc.png"
                    section9bContent={vcmsg}
                />
                <Section2 subheading="Vision and Mission" 
                heading="The University is committed to quality education, research and values-driven mentorship through innovations to serve the society and the changing world. Transformation to excellence through holistic education."
                bgclr="#111111" />
                <Section2 subheading="Core Values" 
                heading="Guided by creativity, critical thinking, merit, transparency, collaboration, partnerships, academic freedom, equality, justice, integrity, honesty, environmental stewardship, and civic engagement, our university strives for excellence and service." />
            </div>
        </>
    )
}

export default Messages