import React from 'react';

import Logo from '../../components/UI/Logo/Logo';

import './AppFooter.scss';

const AppFooter = () => {
    return (
        <div className="app-footer">
            <div className="container">
                <div className="app-footer__inner">
                    <Logo color="white" />
                </div>
            </div>
        </div>
    );
};

export default AppFooter;
