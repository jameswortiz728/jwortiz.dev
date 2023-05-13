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
                <p>Project image will go here</p>
                <p>{project.description}</p>
                <p>{project.url}</p>
                <p>Button here for above link</p>
                <Link to="/projects"><button>Go back</button></Link>
            </div>  
            <Footer/>
        </div>
    )
};

export default ProjectItemPage;