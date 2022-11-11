import React from 'react';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Box from 'common/components/Box';
import PropTypes from 'prop-types';
import Button from 'common/components/Button';
import {ResourceLandingWrapper,Headingresouce,buttonread} from './resourceslandingpaginated.style.js';

const ResourcessLandingPaginated = ({ resources ,button,buttonWrapper,
    fillButton,
    emailShown,
    buttonHidden}) => {
    return (
        <>
        <Headingresouce>
         <Heading
            className="headings-container"
            content="Download Our Free Database"/>
            </Headingresouce>
            <ResourceLandingWrapper>
                {resources.slice(0, 2).map(resource => (
                    <section>
                        {resource.media && <Image className="objectWrapper" src={resource.media[0].localFile.publicURL} alt="resource" />}
                        <div>
                            <a href={`/database-center/${resource.slug}/`} target="_blank" rel="noreferrer"><Heading content={resource.title} /></a>
                            <Text className="metaDescription" content={resource.metaDescription} />
                        </div>
                    </section>
                ))}
            </ResourceLandingWrapper>
            <ResourceLandingWrapper>
                {resources.slice(2, 3).map(resource => (
                    <section>
                        {resource.media && <Image className="objectWrapper" src={resource.media[0].localFile.publicURL} alt="resource" />}
                        <div>
                            <a href={`/database-center/${resource.slug}/`} target="_blank" rel="noreferrer"><Heading content={resource.title} /></a>
                            <Text className="metaDescription" content={resource.metaDescription} />
                        </div>
                    </section>
                ))}
            </ResourceLandingWrapper>
                    <buttonread>
                    <Box {...buttonWrapper} className="email-signup">
           
            <a href="https://www.clodura.ai/database-center/">
              <Button {...fillButton} title="Read All" />
            </a>
          </Box>
            
            </buttonread>
            
            
            
        </>
    );
};

ResourcessLandingPaginated.propTypes = {
    button: PropTypes.object,
    buttonWrapper: PropTypes.object,
  button: PropTypes.object,
  logoStyle: PropTypes.object,
  fillButton: PropTypes.object,
};

ResourcessLandingPaginated.defaultProps = {
   
    fillButton: {
        type: 'button',
        fontSize: ['13px', '14px'],
        fontWeight: '600',
        borderRadius: '4px',
        p: ['0px 15px', '8px 22px'],
        colors: 'tertiaryWithBg',
        minWidth: ['auto', '120px'],
        height: ['40px', '46px'],
        minHeight: 'auto',
      },
      fillInput: {
        fontSize: ['13px', '14px'],
        fontWeight: '600',
        borderRadius: '4px',
        p: ['0px 15px', '8px 22px'],
        minWidth: ['auto', '200px'],
        height: ['40px', '46px'],
        minHeight: 'auto',
      },
      buttonWrapper: {
        flexBox: true,
        justifyContent: 'center',
        mt: '25px',
      },
      button: {
        type: 'button',
        fontSize: ['13px', '14px'],
        fontWeight: '600',
        borderRadius: '4px',
        p: ['0px 15px', '8px 22px'],
        color: '#fff',
        colors: 'secondary',
        height: ['40px', '46px'],
        minHeight: 'auto',
      },
};

export default ResourcessLandingPaginated;