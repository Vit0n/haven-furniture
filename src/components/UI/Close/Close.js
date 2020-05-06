import React from 'react';

import { ReactComponent as CloseIcon } from '../../../images/icons/close.svg';

import './Close.scss';

const Close = props => {
    return (
        <div className="close" onClick={props.clicked}>
            <CloseIcon className="close__icon" style={props.customStyles} />
        </div>
    );
};

export default Close;
