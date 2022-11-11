import React, { useState } from 'react';
import PromotionBlock from 'containers/Charity/PromotionBlock';
import { useStaticQuery, graphql } from 'gatsby';
import Heading from 'common/components/Heading';
import TwoPartWrapper, { TwoPartHeader } from './twoPart.style';

const TwoPart = () => {
    const data = useStaticQuery(graphql`
        query {
            allStrapiHomeTwoPart {
                nodes {
                  part {
                    title,
                    description,
                    image {
                      localFile {
                        publicURL
                      }
                    }
                  }
                }
            }
        }
      `);

    const firstPart = data.allStrapiHomeTwoPart.nodes[0].part[0];
    const secondPart = data.allStrapiHomeTwoPart.nodes[0].part[1];

    const [tab, setTab] = useState(0); // 0 for manual process, 1 for multiple tool usage

    return (
        <TwoPartWrapper>
            <TwoPartHeader>
                <Heading as="h3" content="MONTHLY" style={{ borderBottom: `${tab === 0 ? '4px solid #03BAED' : 'none'}`, color: `${tab === 0 ? '#03BAED' : 'black'}` }} onClick={() => setTab(0)} />
                <Heading as="h3" content="ANNUAL" style={{ borderBottom: `${tab === 1 ? '4px solid #03BAED' : 'none'}`, color: `${tab === 1 ? '#03BAED' : 'black'}` }} onClick={() => setTab(1)} />
            </TwoPartHeader>
            {/* <TwoPartHeader>
                <Heading as="h3" content="INR" style={{ borderBottom: `${tab === 0 ? '4px solid #03BAED' : 'none'}`, color: `${tab === 0 ? '#03BAED' : 'black'}` }} onClick={() => setTab(0)} />
                <Heading as="h3" content="USD" style={{ borderBottom: `${tab === 1 ? '4px solid #03BAED' : 'none'}`, color: `${tab === 1 ? '#03BAED' : 'black'}` }} onClick={() => setTab(1)} />
            </TwoPartHeader> */}
            {/* {tab === 0 && <PromotionBlock title={firstPart.title} description={firstPart.description} image={firstPart.image.localFile.publicURL} />}
            {tab === 1 && <PromotionBlock title={secondPart.title} description={secondPart.description} image={secondPart.image.localFile.publicURL} />} */}
        </TwoPartWrapper>
    );
};


export default TwoPart;
