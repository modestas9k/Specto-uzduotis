import React from 'react';
import { NavLink } from 'react-router-dom';
import './TopNavigation.css';
import Logo from '../../assets/logo-white.svg';

function TopNavigation() {
    return (
        <nav className="top-nav">
            <div className="top-nav__logo">
                <a href="#">
                    <img src={Logo} />
                </a>
            </div>
            <div className="top-nav--links">
                <NavLink to="/" className="top-nav__link">
                    Funkcijos
                </NavLink>
                <NavLink to="#" className="top-nav__link">
                    Ataskaitos
                </NavLink>
                <NavLink to="#" className="top-nav__link">
                    Sandėlys
                </NavLink>
                <NavLink to="#" className="top-nav__link">
                    Nustatymai
                </NavLink>
                <NavLink to="#" className="top-nav__link">
                    Atsijungti
                </NavLink>
            </div>
        </nav>
    );
}

export default TopNavigation;
