import React from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';

const ProjectsPage = () => {
    return (
        <div>
            <Header/>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Projects</h1>
                </div>
            </div>
            <div className="content-container">
                <p>Insert project list here. Links to Heroku, screenshots for each and a small description. Make modular so easier to add more</p>
            </div>
            <Footer/>
        </div>
    )
}

export default ProjectsPage;