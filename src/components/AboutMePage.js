import React from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';

const AboutMePage = () => {
    return (
        <div>
            <Header/>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">About me</h1>
                </div>
            </div> 
            <div className="content-container">
                <p>Yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada
                    yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada
                </p>
            </div>
            <Footer/>
        </div>
    )
}

export default AboutMePage;