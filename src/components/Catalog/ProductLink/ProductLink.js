import React from 'react';

import './ProductLink.scss';
import { Link } from 'react-router-dom';

const ProductLink = props => {
    return (
        <Link className="product-link" to={props.route}>
            <h3>{props.name}</h3>
            <img src={props.imgPath} alt={props.name} />
        </Link>
    );
};

export default ProductLink;
