import React from 'react'
import ImgWithTxt from '../../home/components/section9/ImgWithTxt'

const Zoology = () => {

    // ImgWithTxt Content:
    const Content = [
        {
            title: "Department of Zoology",
            description: "The Department of Zoology at the University of Azad Jammu and Kashmir is a vibrant center for the study of animals and their role in the environment. Our department offers a diverse range of programs, from undergraduate to postgraduate levels, equipping students with the knowledge and skills to explore the fascinating world of zoology."
        },
        {
            description:
                "Our faculty members are actively engaged in research, focusing on areas such as molecular biology, biochemistry, biotechnology, ecology, and wildlife management. We encourage students to participate in research projects, fostering a culture of innovation and discovery."
        },
        {
            description:
                "Our graduates are well-prepared for careers in various fields, including research, education, government agencies, and environmental NGOs. They are equipped to address the challenges of the 21st century and contribute to a sustainable future."
        },
    ];

    return (
        <>
            <ImgWithTxt
                heading="Department of Zoology"
                imageUrl="/depts/zoology.jpg"
                section9bContent={Content}
            />
        </>
    )
}

export default Zoology