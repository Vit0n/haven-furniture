import React from 'react';
import PageInner from '../../PageInner/PageInner';

import Postlink from '../../Banners/PostLink/Postlink';

import HowItWorks from '../../HowItWorks/HowItWorks';
import FromOurBlog from '../../FromOurBlog/FromOurBlog';
import LatestArrivals from '../../../containers/LatestArrivals/LatestArrivals';
import BrowseRange from '../../../containers/BrowseRange/BrowseRange';
import JoinUs from '../../JoinUs/JoinUs';
import OurBenefits from '../../OurBenefits/OurBenefits';

const Index = () => {
    const path = 'https://source.unsplash.com/2600x900/?dining';

    return (
        <div className="IndexPage">
            <PageInner imgPath={path} pageName="SPRING SALE">
                <p style={{ margin: '2rem 0', padding: '0', fontSize: '1.25rem' }}>
                    Here’s a description of the featured collection or promotion.
                </p>
                <button>Shop the Sale</button>
            </PageInner>
            <LatestArrivals />
            <Postlink />
            <BrowseRange />
            <HowItWorks />
            <FromOurBlog />
            <JoinUs />
            <OurBenefits />
        </div>
    );
};

export default Index;
