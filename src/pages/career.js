import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { saasModernTheme } from 'common/theme/saasModern';
import { ResetCSS } from 'common/assets/css/style';
import {
    GlobalStyle,
    ContentWrapper,
} from 'containers/SaasModern/sassModern.style';

import Navbar from 'containers/SaasModern/Navbar';
import Banner from 'containers/Custom/Common/Banner';
import Openings from 'containers/Custom/Careers/Openings';
import Footer from 'containers/AgencyModern/Footer';
import Seo from 'components/seo';
import { Helmet } from 'react-helmet';

const Careers = () => {
    return (
        <ThemeProvider theme={saasModernTheme}>
            <Fragment>
                <Seo title="Work for the Best Sales Automation Platform" description="Clodura is one of the best AI lead generation platforms Check out careers page to know about our current openings We are always looking for bright individuals" robots="index, follow" canonical="https://www.clodura.ai/career/" />
                <ResetCSS />
                
                <GlobalStyle />
                <ContentWrapper>
                    <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
                        <DrawerProvider>
                            <Navbar />
                        </DrawerProvider>
                    </Sticky>
                    <Banner heading="Work With Us" text="We are solving real problems for sales & marketing professionals with our passion to build powerful, scalable, thoughtful products & experiences. We enjoy overcoming challenges and believe that every member of our team has a role and impact in our success stories. We're looking for passionate, smart, and creative people who want to build a place for every team's best thinking, to work and grow together. Check out our open job positions and apply below. If you don't see a role where you fit in, share your resume & a cover letter with our recruiting team. Write to us at" link={"careers@clodura.ai"} z={0} />
                    <Openings />
                    {/* <Pictures /> */}
                    {/* <Team /> */}
                    <Footer />
                </ContentWrapper>
            </Fragment>
        </ThemeProvider>
    );
};
export default Careers;
