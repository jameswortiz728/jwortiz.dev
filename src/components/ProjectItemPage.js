import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './../components/Header';
import Footer from './../components/Footer';

const ProjectItemPage = (props) => {

    const location = useLocation();
    const propsData = location.state;

    console.log(propsData.title);
    
    return (
        <div>
            <Header/>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">{propsData.name}</h1>
                </div>
            </div>
            <div className="content-container">
                <p>{propsData.description}</p>
                <p>{propsData.link}</p>
            </div>  
            <Footer/>
        </div>
    )
};

export default ProjectItemPage;