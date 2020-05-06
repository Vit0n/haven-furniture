import React from 'react';

import ProductCard from '../../components/Catalog/ProductCard/ProductCard';

const LatestArrivals = () => {
    const latestArrivals = [
        {
            id: 1,
            name: 'Tate Armchair',
            price: 899,
            path: require('../../images/goods/chair-1.jpg'),
            sidePath: require('../../images/goods/chair-1-side.jpg'),
        },
        { id: 2, name: 'Guild Coffee Table', price: 379, path: require('../../images/goods/coffee-table-1.jpg') },
        {
            id: 3,
            name: 'Yves Bar Stool',
            price: 329,
            salePrice: 249,
            path: require('../../images/goods/bar-stool-1.jpg'),
            sidePath: require('../../images/goods/bar-stool-1-side.jpg'),
        },
    ];

    return (
        <section className="latest-arrivals" style={{ padding: '6rem 0' }}>
            <div className="container">
                <div className="latest-arrivals__inner">
                    <h3 style={{ marginBottom: '3rem' }}>Latest Arrivals</h3>
                    <div
                        className="latest-arrivals__products"
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                        }}
                    >
                        {latestArrivals.map(item => {
                            return (
                                <ProductCard
                                    key={item.id}
                                    productName={item.name}
                                    productPrice={item.price}
                                    imgPath={item.path}
                                    sideImgPath={item.sidePath}
                                    salePrice={item.salePrice}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestArrivals;
