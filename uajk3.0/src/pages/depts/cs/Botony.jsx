import React from 'react'
import ImgWithTxt from '../../home/components/section9/ImgWithTxt'

const Botony = () => {

    // ImgWithTxt Content:
    const Content = [
        {
            title: "Our Mission",
            description: "The Department of Botany at the University of Azad Jammu and Kashmir is dedicated to unraveling the mysteries of plant life. We offer a diverse range of programs, from undergraduate to postgraduate levels, to equip students with the knowledge and skills needed to address global challenges in agriculture, environment, and biotechnology."
        },
        {
            title: "Cutting-Edge Research",
            description:
                "Our faculty members are actively engaged in cutting-edge research, exploring areas such as molecular biology, genetics, ecology, and ethnobotany. We collaborate with renowned institutions to advance scientific knowledge and contribute to sustainable development."
        },
        {
            title: "State-of-the-Art Facilities",
            description:
                "Our well-equipped laboratories and herbarium provide students with the resources they need to conduct research and experiments. We foster a research-oriented environment that encourages innovation and critical thinking."
        },
        {
            title: "A Bright Future",
            description:
                "Our graduates are well-prepared for careers in academia, research institutions, government agencies, and the private sector. They are equipped to address global challenges and contribute to a sustainable future"
        },
    ];

    return (
        <>
            <ImgWithTxt
                heading="Department of Botany"
                imageUrl="/depts/botany.jpg"
                section9bContent={Content}
            />
        </>
    )
}

export default Botony