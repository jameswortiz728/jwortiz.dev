import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from './../components/Header';
import Footer from './../components/Footer';

const ProjectItemPage = () => {

    const location = useLocation();
    const project = location.state;

    return (
        <div>
            <Header/>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">{project.name}</h1>
                </div>
            </div>
            <div className="content-container">
                <img src={`/images/${project.title}.png`} />
                <p>{project.pageDescription}</p>
                <Link to={project.url}><button>Continue to App</button></Link>
                <Link to="/projects"><button>Go back</button></Link>
            </div>  
            <Footer/>
        </div>
    )
};

export default ProjectItemPage;