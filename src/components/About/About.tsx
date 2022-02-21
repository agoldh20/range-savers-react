import React from 'react';
import './About.scss';

const About = (): JSX.Element => (
    <div className="about">
        <section className="page-section about-heading">
            <div className="container">
                <img className="img-fluid rounded about-heading-img mb-3 mb-lg-0"
                     src="https://practical-golf.com/wp-content/uploads/2015/08/Untitled-design-1-1.jpg" alt=""/>
                <div className="about-heading-content">
                    <div className="row">
                        <div className="bg-faded rounded p-5">
                            <h2 className="section-heading mb-4">
                                <span className="section-heading-upper">Passionate Golfers, Passionate Roots</span>
                                <span className="section-heading-lower">About Us</span>
                            </h2>
                            <p><strong>Jacob Galster - CEO</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default About;
