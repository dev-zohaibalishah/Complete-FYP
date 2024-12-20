import React from 'react'
import ImgWithTxt from '../../home/components/section9/ImgWithTxt'

const Statistics = () => {

    // ImgWithTxt Content:
    const Content = [
        {
            title: "Department of Statistics: Empowering Data-Driven Decisions",
            description: "Established in 2005, the Department of Statistics at the University of Azad Jammu and Kashmir is committed to empowering effective decision-making through data-driven insights. Our programs are designed to equip students with the advanced statistical and computational skills necessary to succeed in today's data-driven world."
        },
        {
            description:
                "Our faculty members are dedicated to providing a comprehensive education that combines theoretical knowledge with practical applications. Students are exposed to a wide range of statistical techniques, including statistical modeling, machine learning, data mining, and data visualization."
        },
        {
            description:
                "We foster a strong research culture, encouraging students to engage in research projects and publish their findings. Our graduates are well-prepared for careers in various fields, including data science, analytics, finance, and government."
        },
        {
            title: "Mission",
            description:
                "To deliver a high-quality statistics program that could enable the students either at the workplace or for the higher education to enhance, enrich and upgrade the statistical literacy; to provide support in the domain of research and professional development of faculty and students simultaneously."
        },
    ];

    return (
        <>
            <ImgWithTxt
                heading="Department of Statistics"
                imageUrl="/depts/statistics.jpg"
                section9bContent={Content}
            />
        </>
    )
}

export default Statistics