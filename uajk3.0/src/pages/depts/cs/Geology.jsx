import React from 'react'
import ImgWithTxt from '../../home/components/section9/ImgWithTxt'

const Geology = () => {

    // ImgWithTxt Content:
    const Content = [
        {
            title: "Exploring Earth's Secrets",
            description: "The Department of Geology at the University of Azad Jammu and Kashmir is a pioneering institution dedicated to unraveling the mysteries of the Earth. Established in 1973, the department has been at the forefront of geological education and research in Pakistan."
        },
        {
            title: "A Legacy of Excellence",
            description:
                "Our department offers a range of programs, including BS Applied Geology, MS/M.Phil., and Ph.D., to equip students with the knowledge and skills to explore the Earth's natural resources and address environmental challenges. Our faculty members are actively involved in research projects funded by the Higher Education Commission and the Pakistan Science Foundation."
        },
        {
            title: "State-of-the-Art Facilities",
            description:
                "Our state-of-the-art laboratories provide students with hands-on experience and opportunities to conduct cutting-edge research. We collaborate with various organizations, including the Atomic Energy Commission, WAPDA, PWD, AKMIDC, and international oil companies, to provide practical training opportunities and research collaborations."
        },
        {
            title: "A Bright Future",
            description:
                "Our graduates are well-prepared for careers in government agencies, private companies, and research institutions. They are equipped to address the challenges of the 21st century and contribute to sustainable development."
        },
    ];

    return (
        <>
            <ImgWithTxt
                heading="Department of Geology"
                imageUrl="/depts/geology.jpg"
                section9bContent={Content}
            />
        </>
    )
}

export default Geology