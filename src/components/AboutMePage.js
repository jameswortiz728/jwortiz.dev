import React from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';

const AboutMePage = () => {
    return (
        <div id="about-me">
            <div className="page-header__main">
                <div className="content-container">
                    <h1 className="page-header__title">About me</h1>
                </div>
            </div> 
            <div className="content-container">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    )
}

export default AboutMePage;