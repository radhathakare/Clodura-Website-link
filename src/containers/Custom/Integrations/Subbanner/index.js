import React from 'react';
import PropTypes from 'prop-types';
import Button from 'common/components/Button';

import SubbannerWrapper from './subbanner.style';

const Subbanner = ({ html, link, button }) => {
    return (
        <SubbannerWrapper>
            <div
                className="integration-post-subbanner-content"
                dangerouslySetInnerHTML={{ __html: html }}
            />
            <a href={link}><Button {...button} title="Register Now!" /></a>
        </SubbannerWrapper>
    );
};

Subbanner.propTypes = {
    button: PropTypes.object,
};

Subbanner.defaultProps = {
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
    },
};

export default Subbanner;
