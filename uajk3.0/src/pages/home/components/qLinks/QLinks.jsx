import React from 'react'
import "./QLinks.css"

const QLinks = () => {
    return (
        <>
            <div className="quick-links">
                <h1>Quick Links</h1>
                <div className="buttons">
                    <div className="btn-wrapper">
                        <div className="btn">
                            <a href="http://www.digitallibrary.edu.pk/ajk%20uni.html" target='_blank'>
                                <button> <span>Digital Library</span> </button>
                            </a>
                        </div>
                        <div className="btn">
                            <a href="https://ajku.edu.pk/new/results/" target='_blank'>
                                <button> <span>Results</span> </button>
                            </a>
                        </div>
                        <div className="btn">
                            <a href="https://www.hec.gov.pk/english/scholarshipsgrants/Pages/NationalScholarships.aspx" target='_blank'>
                                <button> <span>Scholarships</span> </button>
                            </a>
                        </div>
                        <div className="btn">
                            <a href="https://ajku.edu.pk/new/downloads/" target='_blank'>
                                <button> <span>Downloads</span> </button>
                            </a>
                        </div>
                        <div className="btn">
                            <a href="https://ajku.edu.pk/new/?sdm_process_download=1&download_id=17654" target='_blank'>
                                <button> <span>Prospectus</span> </button>
                            </a>
                        </div>
                        <div className="btn">
                            <a href="https://results.ajku.edu.pk/challan/cc.php" target='_blank'>
                                <button> <span>Online Challan</span> </button>
                            </a>
                        </div>
                        <div className="btn">
                            <a href="https://drive.google.com/file/d/10ZFQ70R9zA64-Y41JM9DN-8HHshocMpd/view?usp=sharing" target='_blank'>
                                <button> <span>Annual Report</span> </button>
                            </a>
                        </div>
                        <div className="btn">
                            <a href="https://ajku.edu.pk/new/online-roll-number-and-practical-slip/" target='_blank'>
                                <button> <span>Roll No Slips</span> </button>
                            </a>
                        </div>
                        <div className="btn">
                            <a href="https://ugat.ajku.edu.pk/" target='_blank'>
                                <button> <span>UGAT</span> </button>
                            </a>
                        </div>
                        <div className="btn">
                            <a href="https://umis.ajku.edu.pk/frmTlogin.aspx" target='_blank'>
                                <button> <span>Faculty Portal</span> </button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default QLinks