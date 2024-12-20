import { useState } from 'react';
import "./FAQ.css"

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What are the admission requirements?",
            answer: "Admission requirements typically include a high school diploma or equivalent, standardized test scores (SAT/ACT), letters of recommendation, and a personal statement. Specific requirements may vary by program."
        },
        {
            question: "How do I apply for financial aid?",
            answer: "To apply for financial aid, first complete the FAFSA (Free Application for Federal Student Aid). Our financial aid office will then review your application and determine your eligibility for various aid programs."
        },
        {
            question: "What housing options are available?",
            answer: "We offer various on-campus housing options including traditional dormitories, suite-style rooms, and apartment-style housing. All first-year students are guaranteed on-campus housing."
        },
        {
            question: "Are there study abroad opportunities?",
            answer: "Yes, we offer numerous study abroad programs across multiple continents. Programs range from summer sessions to full academic years, with options available for most majors."
        },
        {
            question: "What career services do you offer?",
            answer: "Our Career Center provides resume reviews, mock interviews, job fairs, networking events, internship placements, and one-on-one career counseling for all students and recent graduates."
        }
    ];

    return (
        <div className="faq">
            <div className="faq-container">
                <h1 className="faq-title">Frequently Asked Questions</h1>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="faq-item"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className={`faq-question ${openIndex === index ? 'active' : ''}`}
                            >
                                <span>{faq.question}</span>
                                <svg
                                    className="chevron-icon"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>

                            <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;