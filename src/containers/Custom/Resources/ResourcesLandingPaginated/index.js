import React from 'react';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import PropTypes from 'prop-types';
import ResourceLandingWrapper from './resourceslandingpaginated.style.js';

const ResourcessLandingPaginated = ({ resources }) => {
    return (
        <>
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
                {resources.slice(2, 4).map(resource => (
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
                {resources.slice(4, 6).map(resource => (
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
                {resources.slice(6, 8).map(resource => (
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
                {resources.slice(8).map(resource => (
                    <section>
                        {resource.media && <Image className="objectWrapper" src={resource.media[0].localFile.publicURL} alt="resource" />}
                        <div>
                            <a href={`/database-center/${resource.slug}/`} target="_blank" rel="noreferrer"><Heading content={resource.title} /></a>
                            <Text className="metaDescription" content={resource.metaDescription} />
                        </div>
                    </section>
                ))}
            </ResourceLandingWrapper>
        </>
    );
};

ResourcessLandingPaginated.propTypes = {
    button: PropTypes.object,
};

ResourcessLandingPaginated.defaultProps = {
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

export default ResourcessLandingPaginated;