import React from 'react'
import ImgWithTxt from '../../home/components/section9/ImgWithTxt'

const English = () => {

    // ImgWithTxt Content:
    const Content = [
        {
            title: "Introduction",
            description: "The department offers a relatively new field of studies i.e., Linguistics along with the traditional and long studied subject Literature. A great deal of emphasis is placed on development of English Language skills and on producing professionals and competent language teachers who are equally conversant with English Literature."
        },
        {
            title: "Career Prospects",
            description:
                "English over many decades has been functioning as a Lingua Franca world over and is likely to enjoy this status for another 100 years. In view of this importance, the career opportunities for those graduating in this subject are vast. There is no denying the fact that Linguistics and English Language Teaching have also gained great deal of importance. The Department is fully alive to these modern developments and needs and has, therefore, devised a course, which can meet all these requirements. The course we offer at BS and Master’s level is unique and has no parallel in the country."
        },
        {
            description:
                "We aim to combine all the three subjects in balanced complex where every component has an adequate proportion of share. Our M.Phil. and Ph.D programs are great amalgam of theory, application and research in linguistics. We are rightfully proud of pioneering top-tier education in the country. Special attention is given to incorporating latest up-to-date trends and approaches in the research."
        },
        {
            description:
                "The depth combined with variety makes our graduates versatile. Up till now, our graduates have been readily absorbed in various fields i.e. teaching, civil services,academia, research and higher studies. The market demand is still growing. The department is playing a vital role in providing trained and competent English teachers to overcome the shortage of skilled professionals."
        },
    ];

    return (
        <>
            <ImgWithTxt
                heading="Department of English"
                imageUrl="/depts/english.jpg"
                section9bContent={Content}
            />
        </>
    )
}

export default English