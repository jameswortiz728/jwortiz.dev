import React from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';

const ResumePage = () => {
    return (
        <div>
            <Header/>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Resume</h1>
                </div>
            </div>
            <div className="content-container">
                <p>Unable to view the document? Download from here</p>
                <div style={{ height: "100vh" }}>
                    <embed
                        src="resume.pdf"
                        type="application/pdf"
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ResumePage;