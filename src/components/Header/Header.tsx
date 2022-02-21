import React, {FC} from 'react';
import {HeaderProps} from './types';
import './Header.scss';
import rangeSaversHeader from '../../assets/images/rs_logo_header.png';

const Header: FC<HeaderProps> = ({setComponent}) => (
    <div className="header">
        <img className="header-image" src={rangeSaversHeader} alt="range savers"/>
        <nav className="navbar navbar-expand-lg" id="navbar">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar-custom" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <button type="button" className="btn btn-success" id="home-header-button" onClick={() => setComponent('home')}>Home</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-success" id="about-header-button" onClick={() => setComponent('about')}>About</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-success" id="product-header-button" onClick={() => setComponent('product')}>Our Product</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-success" id="contact-header-button" onClick={() => setComponent('contact')}>Contact Us</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>    </div>
);

export default Header