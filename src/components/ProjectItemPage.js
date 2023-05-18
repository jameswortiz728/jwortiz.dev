import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import handleScrollTo from '../functions/handleScrollTo';

const ProjectItemPage = () => {

    const location = useLocation();
    const project = location.state;

    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">{project.name}</h1>
                </div>
            </div>
            <div className="content-container">
                <img src={`/images/${project.title}.png`} />
                <p>{project.pageDescription}</p>
                <Link target="_blank" to={project.liveSite}><button className="button">Live Site</button></Link>
                <Link target="_blank" to={project.sourceCode}><button className="button button--source">Source Code</button></Link>
                <Link to="/"><button className="button button--secondary" onClick={() => handleScrollTo('projects')}>Go back</button></Link>
            </div>  
        </div>
    )
};

export default ProjectItemPage;