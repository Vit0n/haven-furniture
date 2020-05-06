import React from 'react';

import ProductLink from '../../components/Catalog/ProductLink/ProductLink';

const BrowseRange = () => {
    const browseRange = [
        {
            id: 1,
            name: 'Dining',
            path: require('../../images/catalog_pages/dining.jpeg'),
            routeTo: '/category/dining',
        },
        {
            id: 2,
            name: 'Living',
            path: require('../../images/catalog_pages/living.jpeg'),
            routeTo: '/category/living',
        },
        {
            id: 3,
            name: 'Bedroom',
            path: require('../../images/catalog_pages/bedroom.jpg'),
            routeTo: '/category/bedroom',
        },
    ];

    return (
        <section className="browse-range" style={{ padding: '6rem 0' }}>
            <div className="container">
                <div className="browse-range__inner">
                    <h3 style={{ marginBottom: '3rem' }}>Browse the range</h3>
                    <div
                        className="browse-range__products"
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                        }}
                    >
                        {browseRange.map(item => {
                            return (
                                <ProductLink key={item.id} name={item.name} route={item.routeTo} imgPath={item.path} />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrowseRange;
