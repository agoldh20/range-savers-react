import React from 'react';
import './Contact.scss';

const Contact = (): JSX.Element => (
    <div className="contact">
        <section className="page-section cta">
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 mx-auto">
                        <div className="text-center rounded background-color">
                            <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLSfWMqmZfGoexKPUVXB4BNFL-tYdvZuXDWd9j-8kVZuDO32AFw/viewform?embedded=true"
                                title="googleContactForm"
                                width="760" height="1075" frameBorder="0">Loading...
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default Contact;
