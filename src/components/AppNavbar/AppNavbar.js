import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Hamburger from '../UI/Hamburger/Hamburger';
import Logo from '../UI/Logo/Logo';
import Search from '../UI/Search/Search';
import Card from '../UI/ShoppingCart/ShoppingCart';

import './AppNavbar.scss';

import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

const AppNavbar = props => {
    const [isMenuShown, setIsMenuShown] = useState(false);

    const pages = [
        { id: 1, name: 'all', path: '/store' },
        { id: 2, name: 'sale', path: '/catalog/sale' },
        { id: 3, name: 'dining', path: '/catalog/dining' },
        { id: 4, name: 'living', path: '/catalog/living' },
        { id: 5, name: 'bedroom', path: '/catalog/bedroom' },
    ];

    return (
        <div className="app-navbar">
            <div className="container">
                <nav className="user-navigation">
                    <div className="user-navigation__menu--wrapper">
                        <Hamburger clicked={() => setIsMenuShown(!isMenuShown)} />
                        <HamburgerMenu isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
                    </div>
                    <Logo color="black" />
                    <div className="user-navigation__actions">
                        <Search clicked={props.openSearchModal} />
                        <Card clicked={props.openCardAside} />
                    </div>
                </nav>
                <nav className="catalog-navigation">
                    {pages.map(page => {
                        return (
                            <Link to={page.path} key={page.id} className="catalog-navigation__link">
                                {page.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
};

export default AppNavbar;
