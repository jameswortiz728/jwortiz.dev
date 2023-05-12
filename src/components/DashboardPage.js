import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';

const DashboardPage = () => (
    <div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Welcome to my website!</h1>
            </div>
        </div>
        <div className="content-container">
            <p>Please click the button below to proceed and learn more about me</p>
            <Link to="/aboutme"><button>Proceed</button></Link>
        </div>
    </div>
    
);

export default DashboardPage;