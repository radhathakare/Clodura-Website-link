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
 import Box from 'common/components/Box';
 import Button from 'common/components/Button';
 import {BlogLandingWrapper,Headinwrapper} from './blogslandingpaginated.style.js';
 
 import Fallback from 'common/assets/image/Blog/fallback.jpg';
 
 const BlogsLandingPaginated = ({ blogs ,buttonWrapper,
    fillButton,
    emailShown,
    buttonHidden}) => {
     return (
         <>  
        <Headinwrapper>
         <Heading
            className="headings-container"
            content="Read Our Latest Blogs"/>
        </Headinwrapper>
        
         
          
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
             <Box {...buttonWrapper} className="email-signup">
           
            <a href="https://www.clodura.ai/blog/">
              <Button {...fillButton} title="Read All" />
            </a>
          </Box>
             
             
             
            
             
             
         </>
     );
 };
 
 BlogsLandingPaginated.propTypes = {
     button: PropTypes.object,
     buttonWrapper: PropTypes.object,
  button: PropTypes.object,
  logoStyle: PropTypes.object,
  fillButton: PropTypes.object,
 };
 
 BlogsLandingPaginated.defaultProps = {
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
 
 export default BlogsLandingPaginated;