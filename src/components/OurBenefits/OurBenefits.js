import React from 'react';

import './OurBenefits.scss';
import Benefit from './Benefit/Benefit';

const OurBenefits = () => {
    const benefits = [
        {
            id: 1,
            header: 'Priority Shipping',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
            svgIcon: require('../../images/icons/shipping-box.svg'),
        },
        {
            id: 2,
            header: 'Fuss Free Returns',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
            svgIcon: require('../../images/icons/dolly.svg'),
        },
        {
            id: 3,
            header: 'In-home Setup Service',
            descr: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.',
            svgIcon: require('../../images/icons/dresser.svg'),
        },
    ];

    return (
        <section className="ourbenefits">
            <div className="container">
                <div className="ourbenefits__inner">
                    {benefits.map(item => (
                        <Benefit key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurBenefits;
