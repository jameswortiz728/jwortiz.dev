import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import handleScrollTo from '../functions/handleScrollTo';
import RedirectModal from './../components/RedirectModal';

const ProjectItemPage = () => {
    const location = useLocation();
    const project = location.state;

    const [liveOpen, setLiveOpen] = useState(false);
    const [sourceOpen, setSourceOpen] = useState(false);

    const openLiveModal = () => {
      setLiveOpen(true);
    }
    
    const openSourceModal = () => {
        setSourceOpen(true);
    }
    
    const closeModal = () => {
        setSourceOpen(false);
        setLiveOpen(false);
    }

    
    return (
        <div>
            <div className="content-container">
                <div className="section section--project">
                    <div>
                        <h1 className="page-header__big">{project.name}</h1>
                        <div className="show-for-desktop">
                            <div className="button--group">
                                <button className="button" onClick={openLiveModal}>Live Site</button>
                                <button className="button button--source" onClick={openSourceModal}>Source Code</button>
                                <Link to="/" state = {{ id: "projects" }}><button className="button button--secondary" onClick={() => handleScrollTo('projects')}>Go back</button></Link>
                            </div>
                        </div> 
                    </div>
                    <div>                
                        <img src={`/images/${project.title}.png`}/>
                        <div className="show-for-mobile">
                            <div className="button--group">
                                <button className="button" onClick={openLiveModal}>Live Site</button>
                                <button className="button button--source" onClick={openSourceModal}>Source Code</button>
                                <Link to="/" state = {{ id: "projects" }}><button className="button button--secondary" onClick={() => handleScrollTo('projects')}>Go back</button></Link>
                            </div>
                        </div> 
                        <p>{project.pageDescription}</p>
                    </div>
                </div>
            </div>
            <RedirectModal open={liveOpen} closeModal={closeModal} url={project.liveSite}/>
            <RedirectModal open={sourceOpen} closeModal={closeModal} url={project.sourceCode}/>  
        </div>
    )

    // return (
    //     <div>
    //         <div className="page-header">
    //             <div className="content-container">
    //                 <h1 className="page-header__title">{project.name}</h1>
    //             </div>
    //         </div>
    //         <div className="content-container">
    //             <img src={`/images/${project.title}.png`} />
    //             <div className="button--group">
    //                 <button className="button" onClick={openLiveModal}>Live Site</button>
    //                 <button className="button button--source" onClick={openSourceModal}>Source Code</button>
    //                 <Link to="/" state = {{ id: "projects" }}><button className="button button--secondary" onClick={() => handleScrollTo('projects')}>Go back</button></Link>
    //             </div>
    //             <p>{project.pageDescription}</p>
    //         </div>
    //         <RedirectModal open={liveOpen} closeModal={closeModal} url={project.liveSite}/>
    //         <RedirectModal open={sourceOpen} closeModal={closeModal} url={project.sourceCode}/>   
    //     </div>
    // )
};

export default ProjectItemPage;