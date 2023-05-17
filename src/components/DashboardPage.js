import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => (
    <div>
        <h1 className="page-header__welcome">Welcome!</h1>
        <div className="content-container">
            <p>Click the button below, or use the header above to learn more about me</p>
            <Link to="/aboutme"><button className="button">Proceed</button></Link>
        </div>
    </div>
    
);

export default DashboardPage;