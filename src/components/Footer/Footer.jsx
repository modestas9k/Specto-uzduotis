// import React from 'react';
import './Footer.css';
import { ReactComponent as LogoIcon } from '../../assets/logoIcon.svg';
import { ReactComponent as WorldIcon } from '../../assets/world.svg';

export default function Footer() {
    return (
        <footer>
            <div>
                <LogoIcon className="footer__logo" />
                <div className="footer__links">
                    <a href="#">Privatumo politika</a>
                    <span>|</span>
                    <a href="#">Teisinės nuostatos</a>
                    <span>|</span>
                    <a href="#">Pagalba ir kontaktai</a>
                </div>
            </div>
            <div>
                <button className="footer__language-btn">
                    <WorldIcon className="footer__language-btn__svg" /> Lietuvių
                </button>
            </div>
        </footer>
    );
}
