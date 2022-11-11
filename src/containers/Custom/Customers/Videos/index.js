import React, { Fragment } from 'react';
import Heading from 'common/components/Heading';
import Box from 'common/components/Box';

import VideosContainer from './videos.style';
import PropTypes from 'prop-types';

const Videos = ({ title }) => {
    return (
        <Fragment>
            <Heading {...title} content="Customer Testimonials" />
            <VideosContainer>
                <Box>
                    <iframe width="450" height="315" src="https://www.youtube.com/embed/wFjfZMkjHSk?controls=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Box>
                <Box>
                    <iframe width="450" height="315" src="https://www.youtube.com/embed/XWjIHoxnrco?controls=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Box>
                <Box>
                    <iframe width="450" height="315" src="https://www.youtube.com/embed/7WTP-b__G04?controls=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Box>
            </VideosContainer>
        </Fragment>
    );
};

Videos.propTypes = {
    title: PropTypes.object
}

Videos.defaultProps = {
    title: {
        fontSize: ['24px', '30px', '30px', '40px', '40px'],
        fontWeight: '600',
        textAlign: 'center'
    }
}


export default Videos;
