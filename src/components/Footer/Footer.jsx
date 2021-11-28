// import React from 'react';
import './Footer.css';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as World } from '../../assets/world.svg';

export default function Footer() {
    return (
        <footer>
            <div>
                <Logo className="footer__logo" />
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
                    <World className="footer__language-btn__svg" /> Lietuvių
                </button>
            </div>
        </footer>
    );
}
