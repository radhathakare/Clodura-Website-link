import React from 'react';
import PropTypes from 'prop-types';
//import Button from 'common/components/Button';

import {Blogpostwrap} from './blogpost.style'
import Link from '../Link';

const BlogPost = ({ className, thumbUrl, title, excerpt, link ,anchorProps,...props}) => {
  // Add all classes to an array
  const addAllClasses = ['blog_post'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <div className={addAllClasses.join(' ')}>
      <div className="thumbnail">
        <img src={thumbUrl} alt={title} />
      </div>
      
      <Blogpostwrap>
        

      <div className="content">
      <Link {...props} >
        <a {...anchorProps}>
        <h3 className="title">{title}</h3>
        <p className="excerpt">{excerpt}</p>
        </a>
        </Link>
        
        <button className='resourcesdrop' title="Read More" type="submit" >
        <a href={`/blogs/${link}`}>Read More</a>
        </button>
      
        
        
        {/* {link && <div className="learn_more">{link}</div>} */}
      </div>
      </Blogpostwrap>
    </div>
  );
};

BlogPost.propTypes = {
  className: PropTypes.string,
  thumbUrl: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string,
  link: PropTypes.element,
};

export default BlogPost;

