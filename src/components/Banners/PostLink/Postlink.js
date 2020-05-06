import React from 'react';
import { Link } from 'react-router-dom';

import './Postlink.scss';

const Postlink = () => {
    return (
        <div className="post-link">
            <div className="container">
                <div className="post-link__inner">
                    <div className="post-link__collage collage">
                        <div className="collage__small">
                            <img src={require('../../../images/posts/collage-small-1.jpg')} alt="small 1" />
                        </div>
                        <div className="collage__big">
                            <img src={require('../../../images/posts/collage-big-1.jpeg')} alt="big 1" />
                        </div>
                    </div>
                    <div className="post-link__description">
                        <h3>Beautify your space</h3>
                        <p className="text-large">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore.
                        </p>
                        <Link to="/test" className="text-large">
                            Learn more
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Postlink;
