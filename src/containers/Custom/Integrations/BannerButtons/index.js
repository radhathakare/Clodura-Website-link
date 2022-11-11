import React from 'react';
import PropTypes from 'prop-types';
import Button from 'common/components/Button';

import BannerButtonsWrapper from './bannerButtons.style';

const BannerButtons = ({ buttonTitles, button }) => {
    return (
        <BannerButtonsWrapper>
            {
                buttonTitles.map(title => (
                    <Button {...button} title={title.title} />
                ))
            }
        </BannerButtonsWrapper>
    );
};

BannerButtons.propTypes = {
    button: PropTypes.object,
};

BannerButtons.defaultProps = {
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

export default BannerButtons;
