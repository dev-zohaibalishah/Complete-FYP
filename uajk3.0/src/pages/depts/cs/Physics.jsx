import React from 'react'
import ImgWithTxt from '../../home/components/section9/ImgWithTxt'

const Physics = () => {

    // ImgWithTxt Content:
    const Content = [
        {
            title: "A Legacy of Excellence",
            description: "The Department of Physics at the University of Azad Jammu and Kashmir is dedicated to exploring the fundamental laws of the universe. Our faculty members are committed to providing quality education and conducting cutting-edge research."
        },
        {
            title: "A World of Opportunities",
            description:
                "We offer a range of programs, including M.Sc., M.Phil., and Ph.D., that equip students with the knowledge and skills to excel in physics and related fields. Our state-of-the-art laboratories provide opportunities for hands-on learning and research."
        },
        {
            title: "Research and Innovation",
            description:
                "We collaborate with renowned institutions to advance research in areas such as nuclear physics, solid-state physics, and computational physics. Our graduates are well-prepared for careers in academia, industry, and research."
        },
    ];

    return (
        <>
            <ImgWithTxt
                heading="Department of Physics"
                imageUrl="/depts/physics.jpg"
                section9bContent={Content}
            />
        </>
    )
}

export default Physics