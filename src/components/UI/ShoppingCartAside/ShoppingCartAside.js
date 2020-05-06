import React from 'react';

import './ShoppingCartAside.scss';
import Close from '../Close/Close';
import CardAsideProduct from '../../CardAsideProduct/CardAsideProduct';
import { Link } from 'react-router-dom';

const ShoppingCartAside = props => {
    const closeCardByOverlay = e => {
        if (e.target.classList.contains('cart-aside__wrapper')) {
            document.body.style.overflowY = 'scroll';
            props.closeCardAside();
        }
    };

    return (
        <div className="cart-aside__wrapper" onClick={closeCardByOverlay}>
            <div className="cart-aside">
                <h5 className="cart-aside__header">
                    Your Cart
                    <div className="cart-aside__goods-amount">4</div>
                    <div className="cart-aside__close">
                        <Close clicked={props.closeCardAside} />
                    </div>
                </h5>
                <ul className="cart-aside__products">
                    <CardAsideProduct />
                </ul>
                <div className="card-aside__subtotal subtotal">
                    <h6>
                        Subtotal
                        <span>$ 1,148.00 USD</span>
                    </h6>
                    <Link to="/checkout" className="button">
                        Continue to checkout
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCartAside;
