import React from 'react'
import ImgWithTxt from '../../home/components/section9/ImgWithTxt'

const Chemistry = () => {

    // ImgWithTxt Content:
    const Content = [
        {
            title: "A Legacy of Excellence",
            description: "The Department of Chemistry at the University of Azad Jammu and Kashmir was established in 1984. Since then, it has been committed to providing quality education and conducting cutting-edge research in various fields of chemistry."
        },
        {
            title: "A Strong Foundation",
            description:
                "Our faculty members are highly qualified and experienced, with a strong focus on research. We offer undergraduate and graduate programs that equip students with the knowledge and skills needed to succeed in academia and industry."
        },
        {
            title: "Research and Innovation",
            description:
                "We encourage students to engage in research activities and publish their findings in reputable journals. Our research areas include natural products, metal extractions, coordination chemistry, surface chemistry, environmental chemistry, bio-analytical chemistry, analytical chemistry, organic synthesis, sonochemistry, and studies of biological activities."
        },
        {
            title: "A Bright Future",
            description:
                "Our graduates are well-prepared for careers in academia, industry, and government sectors. We strive to provide a supportive learning environment that fosters critical thinking, problem-solving, and innovation."
        },
    ];

    return (
        <>
            <ImgWithTxt
                heading="Department of Chemistry"
                imageUrl="/depts/chemistry.jpg"
                section9bContent={Content}
            />
        </>
    )
}

export default Chemistry