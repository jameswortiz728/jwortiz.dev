import React from 'react';
import { Link } from 'react-router-dom';
import handleScrollTo from '../functions/handleScrollTo';

export const Header = () => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/" onClick={() => handleScrollTo('dashboard')}>
                    <h1>JWOrtiz.dev</h1>
                </Link>
                <Link to="/" state = {{ id: "aboutMe" }}><button onClick={() => handleScrollTo('aboutMe')} className="button button--link">About Me</button></Link>
                <Link to="/" state = {{ id: "projects" }}><button onClick={() => handleScrollTo('projects')} className="button button--link">Projects</button></Link>
                <Link to="/" state = {{ id: "resume" }}><button onClick={() => handleScrollTo('resume')} className="button button--link">Resume</button></Link>
            </div>
        </div>
    </header>
);

export default Header;