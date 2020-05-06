import React from 'react';

import { ReactComponent as LogoIcon } from '../../../images/icons/logo.svg';
import { Link } from 'react-router-dom';

const Logo = props => {
    return (
        <Link to="/">
            <LogoIcon style={{ fill: props.color }} />
        </Link>
    );
};

export default Logo;
