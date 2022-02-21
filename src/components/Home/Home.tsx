import React from 'react';
import './Home.scss';

const Home = (): JSX.Element => (
    <div className="home">
        <section className="page-section clearfix">
            <div className="container">
                <div className="intro">
                    <img className="intro-img img-fluid curved-img mb-3 mb-lg-0" id="bootstrap-override"
                         src="https://www.planetgolf.com/uploads/Jones_walking.jpg"/>
                    <div className="intro-text left-0 text-center bg-faded p-5 rounded">
                        <h2 className="section-heading mb-4">
                            <span className="mb-3">There is an old saying:</span>
                            <span className="mb-3">“The longest walk in golf is from the practice range to the first tee!”</span>
                        </h2>
                        <p className="mb-3">No one really knows if their practice will truly prepare them for the
                            course.
                            <br/>
                            We are here to CHANGE that!
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="page-section cta">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 mx-auto">
                        <div className="cta-inner text-center rounded">
                            <h2 className="section-heading mb-4">
                                <span className="section-heading-upper">Our Promise</span>
                                <span className="section-heading-lower">To You</span>
                            </h2>
                            <p className="mb-0">“Range Savers” The only real grass golf mats. Our product allows you to
                                simulate play from the fairway or the rough which gives you the most effective practice
                                session.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default Home;