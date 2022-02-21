import React from 'react';
import './Footer.scss';

const Footer = (): JSX.Element => (
    <div className="footer">
        <footer className="footer text-faded text-center py-5">
            <div className="container">
                <p className="m-0 small">Copyright &copy; RangeSavers {new Date().getFullYear()}</p>
            </div>
        </footer>
    </div>
);

export default Footer