import React from 'react';
import { Link } from 'react-router-dom';

import './HamburgerMenu.scss';

const HamburgerMenu = props => {
    const pagesData = [
        {
            id: 1,
            name: 'Blog',
            path: '/blog',
        },
        {
            id: 2,
            name: 'About',
            path: '/about',
        },
        {
            id: 3,
            name: 'Contact',
            path: '/contact',
        },
        {
            id: 4,
            name: 'FAQ',
            path: '/faq',
        },
        {
            id: 5,
            name: 'Terms & Conditions',
            path: '/legal',
        },
    ];

    const pagesList = (
        <div className="hamburger-navigation__links">
            {pagesData.map(page => (
                <Link
                    key={page.id}
                    to={page.path}
                    className="hamburger-navigation__link"
                    style={{ color: 'black', padding: '0.5rem 1.5rem', whiteSpace: 'nowrap', cursor: 'pointer' }}
                    onClick={() => props.setIsMenuShown(false)}
                >
                    {page.name}
                </Link>
            ))}
        </div>
    );

    return <div>{props.isMenuShown ? <div className="hamburger-navigation">{pagesList}</div> : null}</div>;
};

export default HamburgerMenu;
