import React from 'react';

import './Benefit.scss';

const Benefit = props => {
    return (
        <div className="benefit">
            <h5>{props.header}</h5>
            <p>{props.descr}</p>
            <img src={props.svgIcon} alt={props.header} />
        </div>
    );
};

export default Benefit;
