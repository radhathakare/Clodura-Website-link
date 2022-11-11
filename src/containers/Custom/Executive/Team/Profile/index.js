import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Section from './profile.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Profile = ({ name, designation, image, linkedin }) => {
    return (
        <Section>
            <img
                src={image}
                alt="Profile"
                height="225px"
                width="225px"
            />
            <Heading as="h3" content={name} />
            <Text content={designation} />
            <a href={linkedin} aria-label="Linkedin Icon"><FontAwesomeIcon icon={faLinkedin} style={{fontSize: '26px'}} /></a>
        </Section>
    );
};

Profile.propTypes = {
    name: PropTypes.string,
    designation: PropTypes.string,
}

export default Profile;
