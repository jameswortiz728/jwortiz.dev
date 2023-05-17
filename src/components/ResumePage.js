import React from 'react';
import { Link } from 'react-router-dom';

const ResumePage = () => {
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Resume</h1>
                </div>
            </div>
            <div className="content-container">
                <p>Unable to view the document? Download it from <Link to='/assets/Ortiz-James-Resume.pdf' target="_blank" download>here</Link></p>
                <div style={{ height: "100vh" }}>
                    <embed
                        src="/assets/Ortiz-James-Resume.pdf"
                        type="application/pdf"
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
        </div>
    )
}

export default ResumePage;