import React from 'react'
import ImgWithTxt from '../../home/components/section9/ImgWithTxt'

const CS = () => {

    // ImgWithTxt Content:
    const Content = [
        {
            title: "Introduction",
            description: "The Department of Computer Science & Information Technology (CS&IT) at the University of Azad Jammu and Kashmir is a leading institution committed to providing quality education and conducting cutting-edge research in computer science and information technology. With a rich history dating back to 1991, the department has grown to become a hub for innovation and technological advancement. Our faculty members are internationally recognized experts in their fields, and our students have access to state-of-the-art facilities to support their academic and research endeavors."
        },
        {
            title: "Our Mission",
            description:
                "The Department of Computer Science & Information Technology (CS&IT) is dedicated to equipping students with the knowledge and skills to solve real-world problems through innovative computing solutions. Our programs focus on theoretical and practical aspects of computer science, fostering critical thinking, problem-solving, and research abilities. We strive to create a supportive learning environment that empowers students to become leaders in the field of technology."
        },
        {
            title: "Research Environment/Groups",
            description:
                "The Department of Computer Science & Information Technology fosters a vibrant research culture, encouraging faculty and students to publish research papers in top-tier journals and conferences. We organize regular seminars and workshops to promote knowledge sharing and collaboration among researchers."
        },
        {
            description:
                "The Department of Computer Science & Information Technology (CS&IT) at the University of Azad Jammu and Kashmir is a leading institution committed to providing quality education and research. Our faculty members are internationally recognized experts, and our students have access to state-of-the-art facilities."
        },
        {
            description:
                "We foster a vibrant research culture, encouraging faculty and students to publish research papers in top-tier journals and conferences. Our research focus areas include biomedical signal and image processing, bioinformatics, wireless networking, data security, machine learning, and applied software engineering."
        },
        {
            description:
                "Our undergraduate and graduate programs equip students with the skills and knowledge to succeed in the dynamic field of computer science. Our graduates are well-prepared for successful careers in a wide range of high-tech industries."
        },
    ];

    return (
        <>
            <ImgWithTxt
                heading="Department of CS&IT"
                imageUrl="/depts/cs.jpg"
                section9bContent={Content}
            />
        </>
    )
}

export default CS