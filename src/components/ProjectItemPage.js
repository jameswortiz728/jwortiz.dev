import React from 'react';
import { Link, useLocation } from 'react-router-dom';

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
                <Link target="_blank" to={project.url}><button className="button">Continue to App</button></Link>
                <Link to="/projects"><button className="button button--secondary">Go back</button></Link>
            </div>  
        </div>
    )
};

export default ProjectItemPage;