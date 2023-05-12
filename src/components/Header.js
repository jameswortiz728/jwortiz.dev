import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/">
                    <h1>JWOrtiz.io</h1>
                </Link>
                <Link to="/aboutme"><button>About Me</button></Link>
                <Link to="/resume"><button>Resume</button></Link>
                <Link to="/projects"><button>Projects</button></Link>
            </div>
        </div>
    </header>
);

export default Header;