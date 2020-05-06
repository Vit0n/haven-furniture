import React from 'react';

import './JoinUs.scss';

const JoinUs = () => {
    return (
        <section className="joinus">
            <div className="container">
                <div className="joinus__inner">
                    <h2>Join our mailing list</h2>
                    <p className="text-large">
                        Sign up to receive inspiration, product updates, and special offers from our team.
                    </p>
                    <div className="joinus__input--wrapper">
                        <input className="large" type="text" placeholder="Email Address" />
                        <button className="button-large">Subscribe</button>
                    </div>
                    <p className="text-small text-emphasis">We’ll never share your details. View our Privacy Policy</p>
                </div>
            </div>
        </section>
    );
};

export default JoinUs;
