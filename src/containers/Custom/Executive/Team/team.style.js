import styled from 'styled-components';

const Section = styled.section`
    text-align: center;
    padding: 20px;
    h1 {
        font-size: 30px;
    }
`;

export const ProfilesWrapper = styled.section`
    display: flex;

    > section {
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;



export default Section;
