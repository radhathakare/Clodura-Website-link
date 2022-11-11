import styled from 'styled-components';

const OpeningsWrapper = styled.section`
    margin-top: -120px;
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const OpeningBoxContainer = styled.div`
    width: 50%;
    word-wrap: break-word;
    
    @media only screen and (max-width: 425px) {
        width: 60%;
    }

    > h1 {
        margin-top: 60px;
        font-size: 36px;
        text-align: center;
    }

    > main {
        display: flex;
        justify-content: space-between;
    }

    @media screen and (max-width: 768px) {
        margin-top: 50px;

        > main {
            flex-direction: column;
        }
    }
`;

export default OpeningsWrapper;