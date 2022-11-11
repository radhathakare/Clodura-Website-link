import React, { Fragment, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import Sticky from 'react-stickynode';
import PropTypes from 'prop-types';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import { graphql } from 'gatsby';
import Navbar from 'containers/SaasModern/Navbar';
import Seo from 'components/seo';
import Form from 'containers/Custom/Callback/Form'
import Footer from 'containers/AgencyModern/Footer';
import { saasModernTheme } from 'common/theme/saasModern';
import { ResetCSS } from 'common/assets/css/style';
import {
    GlobalStyle,
    ContentWrapper,
} from 'containers/SaasModern/sassModern.style';
import OpeningDetailWrapper, { OpeningDetailHeader, OpeningDetailInformation } from './openingDetail.style';

const OpeningDetail = ({ data, button }) => {
    const opening = data.strapiCareerOpening;
    const { slug } = opening
    // TODO - Convert to form
    const formRef = useRef();

    const scrollToEmail = () => {
        formRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <ThemeProvider theme={saasModernTheme}>
            <Fragment>
                <Seo title="Clodura.AI | Online B2B Lead Generation Software For Sales Prospecting Platform" />
                <ResetCSS />
                <GlobalStyle />
                <ContentWrapper>
                    <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
                        <DrawerProvider>
                            <Navbar />
                        </DrawerProvider>
                    </Sticky>
                    <OpeningDetailWrapper>
                        <OpeningDetailHeader>
                            <a href="/career/">&larr; View All Jobs</a>
                            <Text content="WORK AT CLODURA" />
                            <Heading as="h1" content={opening.title} />
                            <Button {...button} title="Apply Now" onClick={scrollToEmail} />
                        </OpeningDetailHeader>
                        <OpeningDetailInformation>
                            <div>
                                Please check the job description of this profile below. If you are a fit for this profile then please do share your resume along with a cover letter to our recruitment team at <a href="mailto:careers@clodura.ai">careers@clodura.ai</a>
                            </div>
                            {
                                opening.information.responsibilities &&
                                <>
                                    <Heading as="h1" content="Roles & Responsibilities:" />
                                    <ul>
                                        {opening.information.responsibilities.map((item) => <li>{item}</li>)}
                                    </ul>
                                </>
                            }
                            {
                                opening.information.requirements &&
                                <>
                                    <Heading as="h1" content="Requirements:" />
                                    <ul>
                                        {opening.information.requirements.map((item) => <li>{item}</li>)}
                                    </ul>
                                </>
                            }
                            {
                                opening.information.skills &&
                                <>
                                    <Heading as="h1" content="Preferred Skills:" />
                                    <ul>
                                        {opening.information.skills.map((item) => <li>{item}</li>)}
                                    </ul>
                                </>
                            }
                            {
                                opening.information.attributes &&
                                <>
                                    <Heading as="h1" content="Personal Attributes:" />
                                    <ul>
                                        {opening.information.attributes.map((item) => <li>{item}</li>)}
                                    </ul>
                                </>
                            }
                            <Button {...button} title="Apply Now" onClick={scrollToEmail} />
                        </OpeningDetailInformation>
                        <div ref={formRef}>
                            <Form title="Apply Now" slug={slug} />
                        </div>
                    </OpeningDetailWrapper>
                    <Footer />
                </ContentWrapper>
            </Fragment>
        </ThemeProvider>
    );
};

OpeningDetail.propTypes = {
    button: PropTypes.object
}

OpeningDetail.defaultProps = {
    button: {
        type: 'button',
        fontSize: '13px',
        fontWeight: '700',
        borderRadius: '4px',
        pl: '15px',
        pr: '15px',
        backgroundColor: "#03BAED",
        minHeight: 'auto',
        height: '40px',
        width: 'fit-content',
    },
}

export const pageQuery = graphql`
  query ($slug: String) {
    strapiCareerOpening(slug: { eq: $slug }) {
      id
      slug
      title
      information {
          responsibilities
          requirements
          skills
          attributes
      }
    }
}
`

export default OpeningDetail;
