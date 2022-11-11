import React, { useEffect, useRef } from 'react';
import Box from 'common/components/Box';
import lottie from 'lottie-web';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import { useStaticQuery, graphql } from 'gatsby';

import AdvertisementWrapper, { AdvertisementMain, AdvertisementBoxContainer, AdvertisementBoxRow, AdvertisementBox } from './advertisement.style';


const Advertisement = () => {
    const data = useStaticQuery(graphql`
    query {
        allStrapiPricingAdvertisement {
            nodes {
                titlePlain
                titleColoured
                description
                media {
                    internal {
                      content
                    }
                }
            }
        }
    }
  `);

    const { titlePlain, titleColoured, description, media: mediaContainer } = data.allStrapiPricingAdvertisement.nodes[0];
    const media = JSON.parse(mediaContainer.internal.content);

    let animationContainer = useRef();
    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: media
        });
        return () => anim.destroy();
    }, [media]);


    return (
        <AdvertisementWrapper>
            <Heading as="h1" content={titlePlain} />
            <Heading as="h1" content={titleColoured} className="orange" />
            <Text content={description} />

            <AdvertisementMain>
                <AdvertisementBoxContainer>
                    <AdvertisementBoxRow>
                        <AdvertisementBox>
                            <Text content="B2B Data Coverage" />
                        </AdvertisementBox>
                        <AdvertisementBox>
                            <Text content="Direct Dials Coverage" />
                        </AdvertisementBox>
                    </AdvertisementBoxRow>
                    <AdvertisementBoxRow>
                        <AdvertisementBox>
                            <Text content="Actionable Sales Qualified Leads" />
                        </AdvertisementBox>
                        <AdvertisementBox>
                            <Text content="Automated Sales Sequence" />
                        </AdvertisementBox>
                    </AdvertisementBoxRow>
                    <AdvertisementBoxRow>
                        <AdvertisementBox>
                            <Text content="Company Insights" />
                        </AdvertisementBox>
                    </AdvertisementBoxRow>
                </AdvertisementBoxContainer>

                <Box className="advertisement-image-box">
                    <div ref={animationContainer}></div>
                </Box>
            </AdvertisementMain>

        </AdvertisementWrapper>
    );
};

export default Advertisement;
