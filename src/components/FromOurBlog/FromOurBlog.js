import React from 'react';

import './FromOurBlog.scss';
import FOBPost from './FOBPost/FOBPost';

const FromOurBlog = () => {
    const posts = [
        {
            id: 1,
            header: 'A look back at 2018’s emerging design trends',
            // creationDate: new Date(),
            imgPath: require('../../images/FOBPosts/blog-post-1.jpeg'),
        },
        {
            id: 2,
            header: 'Interview with designer Bradley Keen',
            // creationDate: new Date(),
            imgPath: require('../../images/FOBPosts/blog-post-2.jpg'),
        },
        {
            id: 3,
            header: 'Collaboration with Dwell Magazine',
            // creationDate: new Date(),
            imgPath: require('../../images/FOBPosts/blog-post-3.jpg'),
        },
    ];

    return (
        <section className="fromourblog">
            <div className="container">
                <div className="fromourblog__inner">
                    <h2>From our blog</h2>
                    <div className="fromourblog__posts">
                        {posts.map(post => (
                            <FOBPost
                                key={post.id}
                                header={post.header}
                                imgPath={post.imgPath}
                                creationDate={post.creationDate}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FromOurBlog;
