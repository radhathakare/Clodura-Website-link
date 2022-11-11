import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Quote from '../Quote/index.js';
import { InlineWidget } from "react-calendly";

import ContainerSectionWrapper from './containerSection.style.js';

const ContainerSection = () => {
  const [email, setEmail] = useState('');

  const DemoPageData = useStaticQuery(graphql`
    {
      allStrapiDemoQuote {
        nodes {
          quoteTitle
          quoteDescription
          media {
            localFile {
              publicURL
            }
          }
          title
          name
        }
      }
    }
    `);

  const quoteData = DemoPageData.allStrapiDemoQuote.nodes[0];

  useEffect(() => {
    setEmail(localStorage.getItem('email'));
  }, [])

  return (
    <ContainerSectionWrapper>
      <Quote {...quoteData} />
      <InlineWidget
        url="https://calendly.com/cloduraai/bookademo?hide_event_type_details=1&hide_gdpr_banner=1%22"
        prefill={{
          email: email,
        }} />
    </ContainerSectionWrapper>
  );
};

export default ContainerSection;
