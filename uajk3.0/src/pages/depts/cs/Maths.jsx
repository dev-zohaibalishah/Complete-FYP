import React from 'react'
import ImgWithTxt from '../../home/components/section9/ImgWithTxt'

const Maths = () => {

    // ImgWithTxt Content:
    const Content = [
        {
            title: "Department of Mathematics: A Legacy of Excellence",
            description: "Established in 1984, the Department of Mathematics at the University of Azad Jammu and Kashmir is a leading institution committed to advancing the field of mathematics. Our mission is to inspire students to explore the beauty and power of mathematics, and to equip them with the knowledge and skills to solve complex problems."
        },
        {
            title: "A Comprehensive Curriculum",
            description:
                "We offer a range of undergraduate, graduate, and postgraduate programs that delve into the depths of pure and applied mathematics. Our curriculum is designed to foster critical thinking, problem-solving, and analytical skills. Students are exposed to a variety of mathematical concepts and techniques, including algebraic structures, number theory, topology, analysis, differential equations, numerical analysis, and mathematical modeling."
        },
        {
            title: "Research and Innovation",
            description:
                "Our faculty members are actively engaged in research, publishing papers in renowned journals and presenting their work at international conferences. We encourage students to participate in research projects, fostering a culture of innovation and discovery."
        },
        {
            title: "A Supportive Learning Environment",
            description:
                "We provide a supportive learning environment through seminars, workshops, and one-on-one guidance. Our library and laboratory facilities are well-equipped to support student learning and research."
        },
        {
            description:
                "Our graduates are well-prepared for careers in academia, industry, and government. They possess the mathematical skills and problem-solving abilities to excel in a wide range of fields."
        },
    ];

    return (
        <>
            <ImgWithTxt
                heading="Mathematics Department"
                imageUrl="/depts/math.jpg"
                section9bContent={Content}
            />
        </>
    )
}

export default Maths