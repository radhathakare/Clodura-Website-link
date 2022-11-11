import React, { useState } from 'react';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import PropTypes from 'prop-types';
import ProductTutorialLandingWrapper, { StyledHeading, Overlay } from './productTutorials.style';

const ProductTutorialsLanding = ({ productTutorials }) => {
    const [videoOpen, setVideoOpen] = useState(false);
    const [link, setLink] = useState("");

    return (
        <div>
            {
                videoOpen &&
                <Overlay style={{ top: window.pageYOffset }}>
                    <iframe title="Product Tutorial" width="560" height="315" src={link} allowfullscreen />
                    <button onClick={() => setVideoOpen(false)}>&#10006;</button>
                </Overlay>
            }
            <StyledHeading>How to use Clodura (Tutorials)</StyledHeading>
            <ProductTutorialLandingWrapper>
                {productTutorials.slice(0, 3).map(pt =>
                    <div className='pt-container' onClick={() => { setLink(pt.link); setVideoOpen(true) }}>
                        {pt.media && <Image className="objectWrapper" src={pt.media.localFile.publicURL} alt="product-tutorial" />}
                        <Heading content={pt.title} />
                    </div>
                )}
            </ProductTutorialLandingWrapper>
            <ProductTutorialLandingWrapper>
                {productTutorials.slice(3, 6).map(pt =>
                    <div className='pt-container' onClick={() => { setLink(pt.link); setVideoOpen(true) }}>
                        {pt.media && <Image className="objectWrapper" src={pt.media.localFile.publicURL} alt="product-tutorial" />}
                        <Heading content={pt.title} />
                    </div>
                )}
            </ProductTutorialLandingWrapper>
            <ProductTutorialLandingWrapper>
                {productTutorials.slice(6, 9).map(pt =>
                    <div className='pt-container' onClick={() => { setLink(pt.link); setVideoOpen(true) }}>
                        {pt.media && <Image className="objectWrapper" src={pt.media.localFile.publicURL} alt="product-tutorial" />}
                        <Heading content={pt.title} />
                    </div>
                )}
            </ProductTutorialLandingWrapper>
            <ProductTutorialLandingWrapper>
                {productTutorials.slice(9, 12).map(pt =>
                    <div className='pt-container' onClick={() => { setLink(pt.link); setVideoOpen(true) }}>
                        {pt.media && <Image className="objectWrapper" src={pt.media.localFile.publicURL} alt="product-tutorial" />}
                        <Heading content={pt.title} />
                    </div>
                )}
            </ProductTutorialLandingWrapper>
            <ProductTutorialLandingWrapper>
                {productTutorials.slice(12, 15).map(pt =>
                    <div className='pt-container' onClick={() => { setLink(pt.link); setVideoOpen(true) }}>
                        {pt.media && <Image className="objectWrapper" src={pt.media.localFile.publicURL} alt="product-tutorial" />}
                        <Heading content={pt.title} />
                    </div>
                )}
            </ProductTutorialLandingWrapper>
            <ProductTutorialLandingWrapper>
                {productTutorials.slice(15).map(pt =>
                    <div className='pt-container' onClick={() => { setLink(pt.link); setVideoOpen(true) }}>
                        {pt.media && <Image className="objectWrapper" src={pt.media.localFile.publicURL} alt="product-tutorial" />}
                        <Heading content={pt.title} />
                    </div>
                )}
            </ProductTutorialLandingWrapper>
        </div>
    );
};

ProductTutorialsLanding.propTypes = {
    button: PropTypes.object,
};

ProductTutorialsLanding.defaultProps = {
    button: {
        type: 'button',
        fontSize: '13px',
        fontWeight: '700',
        borderRadius: '4px',
        pl: '15px',
        pr: '15px',
        colors: 'tertiaryWithBg',
        minHeight: 'auto',
        height: '40px',
    }
};

export default ProductTutorialsLanding;