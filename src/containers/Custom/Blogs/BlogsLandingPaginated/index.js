/**
 * @TODO - Refactor this to auto generate the sliced components [blog-container]
 */

import React from 'react';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import iconday from 'images/Group 198.jpg';
import Card from 'common/components/Card';
import PropTypes from 'prop-types';
import BlogLandingWrapper from './blogslandingpaginated.style.js';

import Fallback from 'common/assets/image/Blog/fallback.jpg';

const BlogsLandingPaginated = ({ blogs }) => {
    return (
        <>
            <BlogLandingWrapper>
                {blogs.slice(0, 3).map(blog => (
                    <div className='blog-container'>
                        <Image className="objectWrapper" src={blog.media ? blog.media[0].localFile.publicURL : Fallback} alt="blog" />
                        <a href={`/blog/${blog.slug}/`} target="_blank" rel="noreferrer"><Heading content={blog.title} rel="noreferrer" /></a>
                        <Text className="metaDescription" content={blog.metaDescription} />
                        <Card>
                            <div className='icons'>
                                <Image
                                    src={iconday}
                                    alt="Icon"
                                    width="25px"
                                    height="25px"
                                />
                                <Text className="texttime" content={new Date(blog.date).toDateString().substring(3)} />
                            </div>
                        </Card>
                    </div>
                ))}
            </BlogLandingWrapper>
            <BlogLandingWrapper>
                {blogs.slice(3, 6).map(blog => (
                    <div className='blog-container'>
                        <Image className="objectWrapper" src={blog.media ? blog.media[0].localFile.publicURL : Fallback} alt="blog" />
                        <a href={`/blog/${blog.slug}/`} target="_blank" rel="noreferrer"><Heading content={blog.title} rel="noreferrer" /></a>
                        <Text className="metaDescription" content={blog.metaDescription} />
                        <Card>
                            <div className='icons'>
                                <Image
                                    src={iconday}
                                    alt="Icon"
                                    width="25px"
                                    height="25px"
                                />
                                <Text className="texttime" content={new Date(blog.date).toDateString().substring(3)} />
                            </div>
                        </Card>
                    </div>
                ))}
            </BlogLandingWrapper>
            <BlogLandingWrapper>
                {blogs.slice(6, 9).map(blog => (
                    <div className='blog-container'>
                        <Image className="objectWrapper" src={blog.media ? blog.media[0].localFile.publicURL : Fallback} alt="blog" />
                        <a href={`/blog/${blog.slug}/`} target="_blank" rel="noreferrer"><Heading content={blog.title} rel="noreferrer" /></a>
                        <Text className="metaDescription" content={blog.metaDescription} />
                        <Card>
                            <div className='icons'>
                                <Image
                                    src={iconday}
                                    alt="Icon"
                                    width="25px"
                                    height="25px"
                                />
                                <Text className="texttime" content={new Date(blog.date).toDateString().substring(3)} />
                            </div>
                        </Card>
                    </div>
                ))}
            </BlogLandingWrapper>
            <BlogLandingWrapper>
                {blogs.slice(9, 12).map(blog => (
                    <div className='blog-container'>
                        <Image className="objectWrapper" src={blog.media ? blog.media[0].localFile.publicURL : Fallback} alt="blog" />
                        <a href={`/blog/${blog.slug}/`} target="_blank" rel="noreferrer"><Heading content={blog.title} rel="noreferrer" /></a>
                        <Text className="metaDescription" content={blog.metaDescription} />
                        <Card>
                            <div className='icons'>
                                <Image
                                    src={iconday}
                                    alt="Icon"
                                    width="25px"
                                    height="25px"
                                />
                                <Text className="texttime" content={new Date(blog.date).toDateString().substring(3)} />
                            </div>
                        </Card>
                    </div>
                ))}
            </BlogLandingWrapper>
            <BlogLandingWrapper>
                {blogs.slice(12, 15).map(blog => (
                    <div className='blog-container'>
                        <Image className="objectWrapper" src={blog.media ? blog.media[0].localFile.publicURL : Fallback} alt="blog" />
                        <a href={`/blog/${blog.slug}/`} target="_blank" rel="noreferrer"><Heading content={blog.title} rel="noreferrer" /></a>
                        <Text className="metaDescription" content={blog.metaDescription} />
                        <Card>
                            <div className='icons'>
                                <Image
                                    src={iconday}
                                    alt="Icon"
                                    width="25px"
                                    height="25px"
                                />
                                <Text className="texttime" content={new Date(blog.date).toDateString().substring(3)} />
                            </div>
                        </Card>
                    </div>
                ))}
            </BlogLandingWrapper>
            <BlogLandingWrapper>
                {blogs.slice(15).map(blog => (
                    <div className='blog-container'>
                        <Image className="objectWrapper" src={blog.media ? blog.media[0].localFile.publicURL : Fallback} alt="blog" />
                        <a href={`/blog/${blog.slug}/`} target="_blank" rel="noreferrer"><Heading content={blog.title} rel="noreferrer" /></a>
                        <Text className="metaDescription" content={blog.metaDescription} />
                        <Card>
                            <div className='icons'>
                                <Image
                                    src={iconday}
                                    alt="Icon"
                                    width="25px"
                                    height="25px"
                                />
                                <Text className="texttime" content={new Date(blog.date).toDateString().substring(3)} />
                            </div>
                        </Card>
                    </div>
                ))}
            </BlogLandingWrapper>
        </>
    );
};

BlogsLandingPaginated.propTypes = {
    button: PropTypes.object,
};

BlogsLandingPaginated.defaultProps = {
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

export default BlogsLandingPaginated;