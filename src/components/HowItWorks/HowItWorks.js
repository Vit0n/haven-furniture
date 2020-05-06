import React from 'react';

import './HowItWorks.scss';

import HIWPost from './HIWPost/HIWPost';

const HowItWorks = () => {
    const posts = [
        {
            id: 1,
            header: 'Purchase Securely',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
            imgPath: require('../../images/small-posts/post-small-1.jpg'),
        },
        {
            id: 2,
            header: 'Ships from warehouse',
            description: 'Autem vel eum iure reprehenderit qui in ea voluptate velit esse.',
            imgPath: require('../../images/small-posts/post-small-2.jpg'),
        },
        {
            id: 3,
            header: 'Style your room',
            description: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.',
            imgPath: require('../../images/small-posts/post-small-3.jpg'),
        },
    ];

    return (
        <section className="howitworks">
            <div className="container">
                <div className="howitworks__inner">
                    <h3>How it works</h3>
                    <div className="howitworks__posts">
                        {posts.map(post => {
                            return (
                                <HIWPost
                                    postHeader={post.header}
                                    postDescription={post.description}
                                    imgPath={post.imgPath}
                                    key={post.id}
                                    postNumber={post.id}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
