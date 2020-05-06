import React from 'react';

import './FOBPost.scss';
import { Link } from 'react-router-dom';

const FOBPost = props => {
    return (
        <Link className="fob-post" to="/test-post">
            <div className="fob-post__image--wrapper">
                <img src={props.imgPath} alt="post preview" />
            </div>
            <div className="fob-post__description">
                <span className="fob-post__date">{new Date().toLocaleString()}</span>
                <h4 className="fob-post__header">{props.header}</h4>
            </div>
        </Link>
    );
};

export default FOBPost;
