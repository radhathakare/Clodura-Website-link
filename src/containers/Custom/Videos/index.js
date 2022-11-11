import React from 'react';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import iconday from 'images/Group 198.jpg';
import Card from 'common/components/Card';
import PropTypes from 'prop-types';
import VideosWrapper from './videos.style';

import Fallback from 'common/assets/image/Blog/fallback.jpg';

const VideosLanding = ({ videos }) => {
    return (
        <div>
            <VideosWrapper>
                {videos.slice(0, 3).map(video => (
                    <div className='video-container'>
                        <Image className="objectWrapper" src={video.media ? video.media.localFile.publicURL : Fallback} alt="videos" />
                        <a href={`/videos/${video.slug}/`} target="_blank" rel="noreferrer"><Heading content={video.title} rel="noreferrer" /></a>
                        <Text className="metaDescription" content={video.metaDescription} />
                        <Card>
                            <div className='icons'>
                                <Image
                                    src={iconday}
                                    alt="Icon"
                                    width="25px"
                                    height="25px"
                                />
                                <Text className="texttime" content={new Date(video.date).toDateString().substring(3)} />
                            </div>
                        </Card>
                    </div>
                ))}
            </VideosWrapper>
            <VideosWrapper>
                {videos.slice(3, 6).map(video => (
                    <div className='video-container'>
                        <Image className="objectWrapper" src={video.media ? video.media.localFile.publicURL : Fallback} alt="videos" />
                        <a href={`/videos/${video.slug}/`} target="_blank" rel="noreferrer"><Heading content={video.title} rel="noreferrer" /></a>
                        <Text className="metaDescription" content={video.metaDescription} />
                        <Card>
                            <div className='icons'>
                                <Image
                                    src={iconday}
                                    alt="Icon"
                                    width="25px"
                                    height="25px"
                                />
                                <Text className="texttime" content={new Date(video.date).toDateString().substring(3)} />
                            </div>
                        </Card>
                    </div>
                ))}
            </VideosWrapper>
            <VideosWrapper>
                {videos.slice(6, 9).map(video => (
                    <div className='video-container'>
                        <Image className="objectWrapper" src={video.media ? video.media.localFile.publicURL : Fallback} alt="videos" />
                        <a href={`/videos/${video.slug}/`} target="_blank" rel="noreferrer"><Heading content={video.title} rel="noreferrer" /></a>
                        <Text className="metaDescription" content={video.metaDescription} />
                        <Card>
                            <div className='icons'>
                                <Image
                                    src={iconday}
                                    alt="Icon"
                                    width="25px"
                                    height="25px"
                                />
                                <Text className="texttime" content={new Date(video.date).toDateString().substring(3)} />
                            </div>
                        </Card>
                    </div>
                ))}
            </VideosWrapper>
            <VideosWrapper>
                {videos.slice(9).map(video => (
                    <div className='video-container'>
                        <Image className="objectWrapper" src={video.media ? video.media.localFile.publicURL : Fallback} alt="videos" />
                        <a href={`/videos/${video.slug}/`} target="_blank" rel="noreferrer"><Heading content={video.title} rel="noreferrer" /></a>
                        <Text className="metaDescription" content={video.metaDescription} />
                        <Card>
                            <div className='icons'>
                                <Image
                                    src={iconday}
                                    alt="Icon"
                                    width="25px"
                                    height="25px"
                                />
                                <Text className="texttime" content={new Date(video.date).toDateString().substring(3)} />
                            </div>
                        </Card>
                    </div>
                ))}
            </VideosWrapper>
        </div>
    );
};

VideosLanding.propTypes = {
    button: PropTypes.object,
};

VideosLanding.defaultProps = {
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

export default VideosLanding;