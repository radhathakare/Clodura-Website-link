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
      <>
        <TwoPartWrapper>
            <TwoPartHeader>
                <Heading/>
            </TwoPartHeader>
            <PromotionBlock title="Unlimited access to verified contacts from over 15M+ Companies"  
            image={firstPart.image.localFile.publicURL} />
            
        </TwoPartWrapper>
        <TwoPartWrapper>
        <TwoPartHeader>
            <Heading/>
        </TwoPartHeader>
        <PromotionBlock title="Unlimited access to verified contacts from over 15M+ Companies"  
        image={firstPart.image.localFile.publicURL} />
        
    </TwoPartWrapper>
    </>
    );
};


export default TwoPart;
