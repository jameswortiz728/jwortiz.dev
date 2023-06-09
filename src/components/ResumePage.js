import React from 'react';
import { Link } from 'react-router-dom';
import handleScrollTo from '../functions/handleScrollTo';

const ResumePage = () => {
    return (
        <div id="resume" className="spacer">
            <div className="content-container">
                <div className="section__resume">
                    <div>
                        <h1 className="page-header__big page-header__big--resume">Resume</h1>
                        <p>Unable to view the document? Download it from <Link to='/assets/Ortiz-James-Resume.pdf' target="_blank" download>here.</Link></p>
                        <div className="show-for-desktop"><button onClick={() => handleScrollTo('contactme')} className="button button--resume">Next Section: Contact Me</button></div>
                    </div>
                        <embed
                            className="content-container__resume"
                            src="/assets/Ortiz-James-Resume.pdf"
                            type="application/pdf"
                        />
                    <div className="show-for-mobile"><button onClick={() => handleScrollTo('contactme')} className="button button--resume">Next Section: Contact Me</button></div>
                </div>
            </div>
        </div>
    )
};

export default ResumePage;