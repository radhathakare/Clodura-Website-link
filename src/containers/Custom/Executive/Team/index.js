import React from 'react';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Profile from './Profile';
import Section, {
    ProfilesWrapper,
} from './team.style';

import kapil from '../../../../common/assets/image/saasModern/Team/kapil.webp'
import ajay from '../../../../common/assets/image/saasModern/Team/ajay.webp'
import sunu from '../../../../common/assets/image/saasModern/Team/sunu.webp'

const Team = () => {
    return (
        <Section>
            <Container>
                <Text content="OUR TEAM" color="#FF0000" />
                <Heading as="h1" content="Team Of Executives" />
                <ProfilesWrapper>
                    <Profile name="Kapil Khangaonkar" designation="Founder & CEO" image={kapil} linkedin={"https://in.linkedin.com/in/kapilkhangaonkar/"} />
                    <Profile name="Sunu Engineer" designation="Director" image={sunu} linkedin={"https://www.linkedin.com/in/sunu-engineer-71a0a3114/"}/>
                    <Profile name="Ajay Dubey" designation="Director" image={ajay} linkedin={"https://www.linkedin.com/in/ajay-dubey-a0a86/"}/>
                </ProfilesWrapper>
                {/* <ProfilesWrapper>
                        <>
                            <Profile name="Azah Anyeni" designation="Designer" />
                            <Profile name="Roelof Bekkenenks" designation="React Developer" />
                            <Profile name="Leonardo Oliveira" designation="Illustrator" />
                            <Profile name="Izabella Tabakova" designation="Product Designer" />
                        </>
                </ProfilesWrapper> */}
            </Container>
        </Section>
    );
};

export default Team;
