import React from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <Header/>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">404!</h1>
                </div>
            </div>
            <div className="content-container">
                <Link to="/"><button>Go home</button></Link>
            </div>
        <Footer/>  
    </div>
);

export default NotFoundPage;