import React from 'react';

import { ReactComponent as HamburgerIcon } from '../../../images/icons/hamburger-menu.svg';

import './Hamburger.scss';

const Hamburger = props => {
    return <HamburgerIcon onClick={props.clicked} className="hamburger-icon" />;
};

export default Hamburger;
