import styled from 'styled-components';

const Section = styled.section`
    margin-top: 60px;
    padding: 20px;
    background-color: #F2FBFE;

    h1 {
        font-size: 30px;
    }

    .circles {
        display: flex;
        justify-content: center;
    }

    .arrows {
        display: flex;
        justify-content: flex-end;
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

export const ProgressCircle = styled.div`
    border: 1px solid black;
    height: 10px;
    width: 10px;
    border-radius: 50% 50%;
    margin-right: 10px;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : "#F2FBFE"};
`;

export const Arrow = styled.div`
    padding: 8px;
    margin: 5px;
    border-radius: 10px;
    border: 2px solid #C7A7CD;
    color: #C7A7CD;
    line-height: 20px;
    cursor: pointer;
`;

export default Section;
