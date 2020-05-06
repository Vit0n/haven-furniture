import React from 'react';

import './HIWPost.scss';

const HIWPost = props => {
    return (
        <div className="post">
            <div className="post__image--wrapper">
                <img src={props.imgPath} alt="post" />
                <span className="post__number">{props.postNumber}.</span>
            </div>
            <div className="post__description">
                <h5>{props.postHeader}</h5>
                <p>{props.postDescription}</p>
            </div>
        </div>
    );
};

export default HIWPost;
