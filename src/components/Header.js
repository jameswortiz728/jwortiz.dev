import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import handleScrollTo from '../functions/handleScrollTo';

export const Header = () => {

    const [open, setOpen] = useState(false);

    const openDropdown = () => {
        setOpen(true);
    };

    const closeDropdown = () => {
        setOpen(false);
    };

    const switchDropdown = () => {
        setOpen(!open);
    };

    return (
        <header className="header">
            <div className="content-container">
                <div className="header__content">
                    <Link className="header__title" to="/" onClick={() => handleScrollTo('dashboard')}>
                        <h1>JWOrtiz.dev</h1>
                    </Link>
                    <Link className="show-for-desktop" to="/" state = {{ id: "aboutMe" }}><button onClick={() => handleScrollTo('aboutMe')} className="button button--link">About Me</button></Link>
                    <Link className="show-for-desktop" to="/" state = {{ id: "projects" }}><button onClick={() => handleScrollTo('projects')} className="button button--link">Projects</button></Link>
                    <Link className="show-for-desktop" to="/" state = {{ id: "resume" }}><button onClick={() => handleScrollTo('resume')} className="button button--link">Resume</button></Link>
                    <Link className="show-for-desktop" to="/" state = {{ id: "contactme" }}><button onClick={() => handleScrollTo('contactme')} className="button button--link">Contact Me</button></Link>
                    <div className="show-for-mobile">
                        <button onClick={switchDropdown} className="button button--link">Fast Travel</button>
                    </div>
                </div>
                {open && 
                    <div className="show-for-mobile">
                        <ul className="header__dropdown">
                            <li><Link onClick={closeDropdown} to="/" state = {{ id: "aboutMe" }}><button onClick={() => handleScrollTo('aboutMe')} className="button button--link">About Me</button></Link></li>
                            <li><Link onClick={closeDropdown} to="/" state = {{ id: "projects" }}><button onClick={() => handleScrollTo('projects')} className="button button--link">Projects</button></Link></li>
                            <li><Link onClick={closeDropdown} to="/" state = {{ id: "resume" }}><button onClick={() => handleScrollTo('resume')} className="button button--link">Resume</button></Link></li>
                            <li><Link onClick={closeDropdown} to="/" state = {{ id: "contactme" }}><button onClick={() => handleScrollTo('contactme')} className="button button--link">Contact Me</button></Link></li>
                        </ul>
                    </div>
                }
            </div>
        </header>
    )
};

export default Header;