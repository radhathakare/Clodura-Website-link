import React, { useState } from 'react';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Section, {
    ProfilesWrapper,
    ProgressCircle,
    Arrow,
} from './team.style';
import Profile from './Profile';

const Team = () => {
    const [page, setPage] = useState(0);

    const nextPage = () => {
        setPage(state => {
            if (state >= 2)
                return 0;
            else
                return state + 1;
        })
    };

    const previousPage = () => {
        setPage(state => {
            console.log(state);
            if (state <= 0)
                return 2;
            else
                return state - 1;
        })
    };

    return (
        <Section>
            <Container>
                <Text content="OUR TEAM" color="#F0DDDA" />
                <Heading as="h1" content="Team Of Founders" />
                <Heading as="h1" content="And Developers " />
                <div className="arrows">
                    <Arrow onClick={previousPage}>&larr;</Arrow>
                    <Arrow onClick={nextPage}>&rarr;</Arrow>
                </div>
                <ProfilesWrapper>
                    {
                        page === 0 &&
                        <>
                            <Profile name="Azah Anyeni" designation="Designer" />
                            <Profile name="Roelof Bekkenenks" designation="React Developer" />
                            <Profile name="Leonardo Oliveira" designation="Illustrator" />
                            <Profile name="Izabella Tabakova" designation="Product Designer" />
                        </>
                    }
                    {
                        page === 1 &&
                        <>
                            <Profile name="Roelof Bekkenenks" designation="React Developer" />
                            <Profile name="Izabella Tabakova" designation="Product Designer" />
                            <Profile name="Azah Anyeni" designation="Designer" />
                            <Profile name="Leonardo Oliveira" designation="Illustrator" />
                        </>
                    }
                    {
                        page === 2 &&
                        <>
                            <Profile name="Izabella Tabakova" designation="Product Designer" />
                            <Profile name="Leonardo Oliveira" designation="Illustrator" />
                            <Profile name="Roelof Bekkenenks" designation="React Developer" />
                            <Profile name="Azah Anyeni" designation="Designer" />
                        </>
                    }
                </ProfilesWrapper>
                <div className="circles">
                    <ProgressCircle backgroundColor={page === 0 && "rgb(244, 136, 55)"} />
                    <ProgressCircle backgroundColor={page === 1 && "rgb(244, 136, 55)"} />
                    <ProgressCircle backgroundColor={page === 2 && "rgb(244, 136, 55)"} />
                </div>
            </Container>
        </Section>
    );
};

export default Team;
