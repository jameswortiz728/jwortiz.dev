import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">404!</h1>
            </div>
        </div>
        <div className="content-container">
            <Link to="/"><button className="button">Go home</button></Link>
        </div>
    </div>
);

export default NotFoundPage;