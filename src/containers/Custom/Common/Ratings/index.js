import React from 'react';
import Rating from './Rating';
import RatingsWrapper, { CardContainer } from './ratings.style';

import ph from 'common/assets/image/Customers/ph.webp';
import tr from 'common/assets/image/Customers/tr.webp';
import cap from 'common/assets/image/Customers/cap.webp';
import g2 from 'common/assets/image/Customers/g2.webp';

const Ratings = () => {
    return (
        <RatingsWrapper>
            <CardContainer>
                <a href="https://www.g2.com/products/clodura-ai/reviews"><img src={g2} alt="G2 Logo" /></a>
                <Rating rating={4.5} />
            </CardContainer>
            <CardContainer>
                <a href="https://www.capterra.com/p/165908/Clodura/"><img src={cap} alt="CapTerra Logo"/></a>
                <Rating rating={4.4} />
            </CardContainer>
            <CardContainer>
                <a href="https://www.producthunt.com/products/clodura-ai"><img src={ph} alt="ProductHunt Logo"/></a>
                <Rating rating={5} />
            </CardContainer>
            <CardContainer>
                <a href="https://www.trustradius.com/products/clodura/reviews"><img src={tr} alt="TrustRadius Logo"/></a>
                <Rating rating={4.5} />
            </CardContainer>
        </RatingsWrapper>
    );
};

export default Ratings;
