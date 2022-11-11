import styled from 'styled-components';

const OpeningDetailWrapper = styled.section`
    margin: 0;
    margin-top: 60px;
    margin-bottom: 300px;

    li {
        list-style-type: circle;
    }
`;

export const OpeningDetailHeader = styled.section`
    background-color: #F2FBFE;
    padding: 30px;
    display: flex;
    flex-direction: column;
    
    > p {
        text-align: center;
        color: #95C465;
        font-size: 16px;
    }
    
    > h1 {
        text-align: center;
        font-size: 48px;
    }
    
    > button {
        align-self: center;
    }

    > a {
        font-size: 16px;
        text-decoration: none;
    }
`;

export const OpeningDetailInformation = styled.div`
    margin-bottom: -350px;
    padding: 5vw;
    padding-bottom: 2.5vw;
    max-width: 100vw;
    word-wrap: break-word;
    font-weight: 400;

    > ul {
        padding-inline-start: 30px;
    }

    > button {
        margin-left: 10px;
        margin-top: 30px;
    }

    > h1 {
        margin-top: 20px;
    }
`;

export default OpeningDetailWrapper;