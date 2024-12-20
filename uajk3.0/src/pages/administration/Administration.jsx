import React from 'react'
import "./Administration.css"

import HeroBanner from "../../components/heroBanner/HeroBanner"
import AdminStaff from './adminStaff/AdminStaff'
import Section2 from '../home/components/section2/section2'
import AdminMain from './adminMain/AdminMain'




const Administration = () => {


  // Secondary Menu
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const sections = [
    { id: "vc-office", label: "VC Office" },
    { id: "registrar-office", label: "Registrar Office" },
    { id: "finance-office", label: "Finance & Planning Office" },
    { id: "dsa-office", label: "DSA Office" },
    { id: "research-office", label: "Advanced Studies Office" },
    { id: "pd-office", label: "Planning & Development" },
    { id: "dpr-office", label: "Public Relations Office" },
    { id: "bic-office", label: "Business Incubation Centre" }
  ];

  // Sections Content Objects:

  // VC Office:
  const vctext = {
    title: "Vice Chancellor Office",
    data: "The Vice-Chancellor's Office, led by the University's chief academic and administrative officer, plays a crucial role in shaping the institution's future. The office provides strategic leadership, oversees policy development, and supports the University's operations. Committed to integrity, professionalism, and excellence, the Vice-Chancellor's Office ensures the smooth functioning of the University."
  }

  const vc = {
    image: "/adminOffices/vc.jpg",
    designation: "Vice Chancellor",
    text: ["Prof. Dr. Muhammad Kaleem Abbasi", "Ph: (Off) (+92)5822-960479", "Fax: (092)5822-960480", "Email: vice.chancellor@ajku.edu.pk"]
  }

  const vcOffice = [
    {
      image: "/adminOffices/vcStaff1.jpg",
      name: 'Shafique Ahmed Abbasi',
      designation: 'Senior Private Secretary',
      contactDetails: ['Phone: (Off) (+92)5822-960479', 'Fax: (092)5822-960480', 'Email: ps.tovc@ajku.edu.pk']
    },
    {
      image: "/adminOffices/vcStaff2.jpg",
      name: 'Shaukat Hussain',
      designation: 'Private Secretary  (P.S)',
      contactDetails: ['Email: cooper@example.com', 'Phone: +987 654 321']
    }
  ];

  // Registrar Office:
  const registrartext = {
    title: "registrar Office",
    data: "The Registrar's Office is responsible for maintaining academic records, conducting elections, and providing administrative support to the University's governing bodies. As custodian of the University's seal, the Registrar ensures the integrity of academic processes and records."
  }

  const registrar = {
    image: "/adminOffices/registrar.webp",
    designation: "Registrar",
    text: ["Prof. Dr. Ghulam Murtaza", "Ph: (Off) (+92)5822-960418", "Fax: (092)5822-960437", "Email: registrar@ajku.edu.pk"]
  }

  const registrarOffice = [
    {
      image: "/adminOffices/ragistrar1.jpg",
      name: 'Zafar Iqbal',
      designation: 'Additional Registrar',
      contactDetails: ['Ph: (Off) (+92)5822-960452', 'Email: zafar.druajk@gmail.com']
    },
    {
      image: "/adminOffices/ragistrar2.jpg",
      name: 'Nazakat Hussain Janjua',
      designation: 'Deputy Registrar (Establishment-II)',
      contactDetails: ['Ph: (Off) (+92)5822-960427', 'Email: nazakat@ajku.edu.pk']
    },
    {
      image: "/adminOffices/ragistrar3.jpg",
      name: 'Muhammad Ikram Qureshi',
      designation: 'Deputy Registrar (Establishment-I)',
      contactDetails: ['Ph: (Off) (+92)5822-960418', 'Email: dr.estb1@ajku.edu.pk']
    },
    {
      image: "/adminOffices/ragistrar4.jpg",
      name: 'Safdar Huissain Rathore',
      designation: 'Assistant Registrar (Affiliation)',
      contactDetails: ['Cell: (+92)03002869502', 'Email: safdarrathore67@gmail.com']
    },
    {
      image: "/adminOffices/ragistrar5.jpg",
      name: 'Hassan Zaka',
      designation: 'Assistant Registrar (Establishment-II & Legal)',
      contactDetails: ['Ph: (Off) (+92)5822-960427', 'Email: hassan.zaka@ajku.edu.pk']
    },
    {
      image: "/adminOffices/ragistrar6.webp",
      name: 'Abrar Ahmed Khan',
      designation: 'Assistant Registrar (Academics & Meeting)',
      contactDetails: ['Ph: (Off) (+92)5822-960481', 'Email: ar.acadmeeting@ajku.edu.pk']
    },
    {
      image: "/adminOffices/ragistrar7.jpg",
      name: 'Muhammad Farooq Azam',
      designation: 'Assistant Registrar (Registration)',
      contactDetails: ['Ph: (Off) (+92)5822-920559', 'Email: ar.pqr@ajku.edu.pk']
    }
  ];

  // Finance & Planning Office:
  const financetext = {
    title: "Finance & Planning Office",
    data: "The Director Finance & Planning is responsible for the University's financial health and strategic planning. This includes managing property, investments, budgeting, and ensuring funds are used effectively. The Director also plays a key role in developing and evaluating academic programs."
  }

  const finance = {
    image: '/adminOffices/finance.jpeg',
    designation: "Director Finance and Planning",
    text: ["Prof. Dr. Muhammad Basharat", "Ph: (Off) (+92)5822-962321", "Fax: (092)5822-960437", "Email: director.finance@ajku.edu.pk"]
  }

  const financeOffice = [
    {
      image: '/adminOffices/finance1.jpg',
      name: 'Syed Zulqarnain Ur Raza Kazmi',
      designation: 'Additional Director Finance',
      contactDetails: ['Ph: (Off) (+92)5822-960465', 'Cell:03129057466', 'Fax: (092)5822-960437', 'Email: zulqarnain.kazmi@ajku.edu.pk']
    },
    {
      image: '/adminOffices/male.jpg',
      name: 'Muhammad Owais',
      designation: 'Assistant Director Finance (Compilation)',
      contactDetails: ['Ph: (+92)05822- 923147', 'Fax: (092)5822-960432']
    }
  ];

  // DSA Office:
  const dsatext = {
    title: "Directorate of Students’ Affairs",
    data: "The Directorate of Students’ Affairs provides essential services to students, including admissions, welfare, sports, healthcare, counseling, scholarships, financial aid, and hostel accommodations. The office is committed to enhancing the overall student experience."
  }

  const dsa = {
    image: "/adminOffices/dsa.png",
    designation: "Director Students Affair",
    text: ["Dr. Sharjeel Saeed", "Ph: (Off) (+92)5822-960463", "Fax: (092)5822-960437", "Email: ddsa.mzd@ajku.edu.pk"]
  }


  // Advaced Studies and Research Office:
  const researchtext = {
    title: "Advaced Studies and Research Office",
    data: "The Directorate of Advanced Studies and Research promotes and facilitates research and postgraduate studies at the University. It oversees M.Phil. and Ph.D. programs, supports faculty research, and organizes academic events. The Directorate is committed to academic excellence and ensuring the timely completion of research degrees."
  }

  const research = {
    image: "/adminOffices/female.jpg",
    designation: "Director",
    text: ["Prof. Dr. Syeda Sadiqa Firdous", "Ph: (Off) (+92)5822-962337", "Email: dasr@ajku.edu.pk"]
  }

  // Planning & Development Office:
  const pdtext = {
    title: "Planning & Development",
    data: "The Planning and Development Directorate is responsible for the University's strategic planning and development. It assesses infrastructure needs, prepares development plans, and oversees project implementation to ensure the University's growth and progress."
  }

  const pd = {
    image: '/adminOffices/finance.jpeg',
    designation: "Director Finance and Planning",
    text: ["Prof. Dr. Muhammad Basharat", "Ph: (Off) (+92)5822-960465", "Cell: 0300-9860651", "Fax: (092)5822-960437",
      "Email: pnd@ajku.edu.pk,director.pnd@ajku.edu.pk"]
  }

  const pdOffice = [
    {
      image: '/adminOffices/finance1.jpg',
      name: 'Syed Zulqarnain Ur Raza Kazmi',
      designation: 'Additional Director Finance/Deputy Director P&D',
      contactDetails: ['Ph: (Off) (+92)5822-960465', 'Cell:03129057466', 'Fax: (092)5822-960437', 'Email: zulqarnain.kazmi@ajku.edu.pk']
    },
    {
      image: '/adminOffices/pd2.jpeg',
      name: 'Afshan Muneer',
      designation: 'Assistant Director P&D-I (Strategic Planning)',
      contactDetails: ['Ph: (Off) (+92)5822-960465', 'Cell:0347-5461154', 'Fax: (092)5822-960437', 'Email: afshan.qadri@ajku.edu.pk']
    },
    {
      image: '/adminOffices/pd3.jpeg',
      name: 'Shakeel Bashir',
      designation: 'Assistant Director P&D-II (Monitoring and Evaluation)',
      contactDetails: ['Ph: (Off) (+92)5822-960465', 'Cell:0300-9724243', 'Fax: (092)5822-960437', 'Email: Shakeel.bashir@ajku.edu.pk']
    }
  ];

  // Department of Public Relation Office:
  const dprtext = {
    title: "Department of Public Relation",
    data: "The Public Relations Department is dedicated to enhancing the University's reputation and fostering strong relationships with stakeholders. The department oversees media relations, manages events, and produces publications to promote UAJK's academic excellence and initiatives."
  }

  const dpr = {
    image: '/adminOffices/dpr.jpg',
    designation: "Public Relations Officer",
    text: ["Syed Mubashar Hussain", "Ph: (Off)  +92-5822-920910", "Mobile: +92-300-5598887", "Email: pro@ajku.edu.pk"]
  }

  const dprOffice = [
    {
      image: '/adminOffices/dpr1.jpg',
      name: 'Imran Ali Zaman',
      designation: 'Junior Clerk / Graphics Designer',
      contactDetails: ['Ph: (Off) (+92)5822-920910', 'Fax: (092)5822-960480', 'Email: imranali89@gmail.com']
    },
    {
      image: '/adminOffices/dpr2.jpg',
      name: 'Israr Naqvi',
      designation: 'Photographer',
      contactDetails: ['Phone: +92-5822-920910', 'Mobile: +92-345-9604228', 'Email: israrnaqvi5@gmail.com']
    }
  ];

  // Business Incubation Centre (BIC) Office:
  const bictext = {
    title: "Business Incubation Centre (BIC)",
    data: "The Business Incubation Center (BIC) at UAJK empowers aspiring entrepreneurs by providing essential resources and support. By offering mentorship, training, and networking opportunities, the BIC helps students and community members transform innovative ideas into successful businesses. The BIC is committed to fostering a thriving entrepreneurial ecosystem in the region."
  }

  const bic = {
    image: '/adminOffices/male.jpg',
    designation: "DIRECTOR",
    text: ["Dr. Abdul Rauf", "Ph: (Off) (+92)5822-", "Fax: (092)5822-960480", "Email: bic@ajku.edu.pk"]
  }


  return (
    <>
      <div id="admin-offices-container">
        <HeroBanner pageTitle="Admin Offices" subTitle="Connect with the Right Office" />

        <div className="sections-wrapper">

          {/* Secondary Nav Bar */}
          <nav className="secondary-nav">
            <ul>
              {sections.map(section => (
                <li key={section.id}>
                  <button onClick={() => scrollToSection(section.id)}>{section.label}</button>
                </li>
              ))}
            </ul>
          </nav>

          {/* VC Office */}
          <div id="vc-office">
            <Section2 subheadingSize="6rem" headingSize="3rem" subheading={vctext.title} heading={vctext.data} />
            <AdminMain
              mainImg={vc.image}
              mainTitle={vc.designation}
              mainDetails={vc.text}
            />
            <AdminStaff staffTitle='VC Staff Details' staff={vcOffice} />
          </div>

          {/* registrar Office */}
          <div id="registrar-office">
            <Section2 subheadingSize="6rem" headingSize="3rem" subheading={registrartext.title} heading={registrartext.data} />
            <AdminMain
              mainImg={registrar.image}
              mainTitle={registrar.designation}
              mainDetails={registrar.text}
            />
            <AdminStaff staffTitle='Staff Details' staff={registrarOffice} />
          </div>

          {/* Finance & Planning Office */}
          <div id="finance-office">
            <Section2 subheadingSize="6rem" headingSize="3rem" subheading={financetext.title} heading={financetext.data} />
            <AdminMain
              mainImg={finance.image}
              mainTitle={finance.designation}
              mainDetails={finance.text}
            />
            <AdminStaff staffTitle='Staff Details' staff={financeOffice} />
          </div>

          {/* DSA Office */}
          <div id="dsa-office">
            <Section2 subheadingSize="6rem" headingSize="3rem" subheading={dsatext.title} heading={dsatext.data} />
            <AdminMain
              mainImg={dsa.image}
              mainTitle={dsa.designation}
              mainDetails={dsa.text}
            />
          </div>

          {/* Advanced Studies & Research Office */}
          <div id="research-office">
            <Section2 subheadingSize="6rem" headingSize="3rem" subheading={researchtext.title} heading={researchtext.data} />
            <AdminMain
              mainImg={research.image}
              mainTitle={research.designation}
              mainDetails={research.text}
            />
          </div>

          {/* Planning & Development */}
          <div id="pd-office">
            <Section2 subheadingSize="6rem" headingSize="3rem" subheading={pdtext.title} heading={pdtext.data} />
            <AdminMain
              mainImg={pd.image}
              mainTitle={pd.designation}
              mainDetails={pd.text}
            />
            <AdminStaff staffTitle='Staff Details' staff={pdOffice} />
          </div>

          {/* Department of Public Relation */}
          <div id="dpr-office">
            <Section2 subheadingSize="6rem" headingSize="3rem" subheading={dprtext.title} heading={dprtext.data} />
            <AdminMain
              mainImg={dpr.image}
              mainTitle={dpr.designation}
              mainDetails={dpr.text}
            />
            <AdminStaff staffTitle='Staff Details' staff={dprOffice} />
          </div>

          {/* Business Incubation Centre (BIC) */}
          <div id="bic-office">
            <Section2 subheadingSize="6rem" headingSize="3rem" subheading={bictext.title} heading={bictext.data} />
            <AdminMain
              mainImg={bic.image}
              mainTitle={bic.designation}
              mainDetails={bic.text}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Administration