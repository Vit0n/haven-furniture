import React from 'react';

import { ReactComponent as ShoppingCartIcon } from '../../../images/icons/shopping-cart.svg';

import './ShoppingCart.scss';

const ShoppingCart = props => {
    const itemsInCard = 3;

    return (
        <div className="shopping-cart" onClick={props.clicked}>
            <ShoppingCartIcon className="shopping-cart__icon" />
            <div className="shopping-cart__goods-amount">{itemsInCard}</div>
        </div>
    );
};

export default ShoppingCart;
