import React from 'react'
import ImgWithTxt from '../../home/components/section9/ImgWithTxt'

const Economics = () => {

    // ImgWithTxt Content:
    const Content = [
        {
            title: "A Pioneering Institution",
            description: "The Department of Economics at the University of Azad Jammu and Kashmir is a pioneering institution with a rich history dating back to 1978. It has been at the forefront of economic education and research in the region, contributing significantly to the development of the field."
        },
        {
            title: "Academic Programs",
            description:
                "The department offers a comprehensive range of programs, including a rigorous three-year PhD program for advanced research, a two-year M.Phil. program focusing on specialized areas, and a four-year BS program providing a strong foundation in economic theory and applications."
        },
        {
            title: "A Strong Faculty and Research Culture",
            description:
                "The department boasts a highly qualified faculty with expertise in various fields of economics, including microeconomics, macroeconomics, econometrics, international economics, and development economics. Faculty members are actively engaged in research, publishing papers in reputable journals and participating in conferences."
        },
        {
            title: "State-of-the-Art Facilities",
            description:
                "The department is equipped with modern facilities, including a well-stocked library, computer labs, and seminar rooms. These resources provide students with ample opportunities for research, study, and collaboration."
        },
        {
            description:
                "The Department of Economics is committed to producing well-rounded graduates who are equipped to address the complex economic challenges of the 21st century. Our graduates are sought after by leading organizations, both nationally and internationally."
        },
    ];

    return (
        <>
            <ImgWithTxt
                heading="Department of Economics"
                imageUrl="/depts/economics.jpg"
                section9bContent={Content}
            />
        </>
    )
}

export default Economics