import React from 'react';

import './CardAsideProduct.scss';

const CardAsideProduct = () => {
    return (
        <li className="product">
            <div className="product__image--wrapper">
                <img src={require('../../images/goods/bar-stool-1.jpg')} alt="bar stool" />
            </div>
            <div className="product__description--wrapper">
                <h5>Dana Dining Chair</h5>
                <span>$ 139.00 USD</span>
                <button>Remove</button>
            </div>
            <div className="product__amount--wrapper">
                <input type="number" placeholder="1" />
            </div>
        </li>
    );
};

export default CardAsideProduct;
