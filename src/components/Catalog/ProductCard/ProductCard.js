import React, { useState, useEffect } from 'react';

import { ProductCard as ProductCardStyles } from './ProductCard.module.scss';

const ProductCard = props => {
    const [imgPath, setImgPath] = useState(props.imgPath);

    useEffect(() => {
        setImgPath(props.imgPath);
    }, []);

    const handleMouseOver = e => {
        if (props.sideImgPath) {
            setImgPath(props.sideImgPath);
        }
    };

    const handleMouseOut = e => {
        if (props.sideImgPath) {
            setImgPath(props.imgPath);
        }
    };

    const priceStyles = {
        opacity: '0.6',
    };

    const computedPriceStyles = {
        textDecoration: props.salePrice ? 'line-through' : 'none',
        opacity: props.salePrice ? '0.3' : '0.6',
    };

    const redPriceStyles = {
        color: 'red',
        opacity: '1',
        marginLeft: '0.5rem',
    };

    return (
        <div className={ProductCardStyles}>
            <div
                className="ProductImages"
                style={{ height: '435px', width: '360px', backgroundColor: 'lightgrey', position: 'relative' }}
            >
                <img
                    className="FirstImage"
                    src={imgPath}
                    style={{ position: 'absolute', left: '0', top: '0', width: '100%', height: '100%' }}
                    alt="product"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                />

                {props.salePrice ? (
                    <span
                        className="ProductTag"
                        style={{
                            position: 'absolute',
                            right: '5%',
                            top: '5%',
                            color: 'white',
                            backgroundColor: 'red',
                            borderRadius: '10px',
                            padding: '0.5rem 1rem',
                            display: 'flex',
                            fontSize: '0.8rem',
                            textTransform: 'uppercase',
                        }}
                    >
                        Sale
                    </span>
                ) : null}
            </div>
            <div className="ProductDescription" style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>
                <h3 style={{ marginBottom: '1rem' }}>{props.productName}</h3>
                <h5>
                    <span style={{ ...priceStyles, ...computedPriceStyles }}>$ {props.productPrice}.00 USD </span>
                    {props.salePrice ? <span style={redPriceStyles}> $ {props.salePrice}.00 USD</span> : null}
                </h5>
            </div>
        </div>
    );
};

export default ProductCard;
