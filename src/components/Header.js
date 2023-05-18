import React from 'react';
import { Link } from 'react-router-dom';
import handleScrollTo from '../functions/handleScrollTo';

export const Header = () => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/">
                    <h1>JWOrtiz.io</h1>
                </Link>
                <button onClick={handleScrollTo("about-me")} className="button button--link">About Me</button>
                <button onClick={handleScrollTo("resume")} className="button button--link">Resume</button>
                <button onClick={handleScrollTo("projects")} className="button button--link">Projects</button>
            </div>
        </div>
    </header>
);

export default Header;