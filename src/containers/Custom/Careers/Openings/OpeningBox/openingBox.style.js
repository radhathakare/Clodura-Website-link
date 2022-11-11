import styled from 'styled-components';

const OpeningBoxWrapper = styled.section`
    width: 45%;
    padding: 20px;
    border: 2px solid #07BBED;
    border-radius: 2%;

    @media only screen and (max-width: 425px) {
        padding: 10px;
    }

    > div {
        height: 70px;
        width: 70px;
        border-radius: 50% 50%;
        background-color: #8E3A8D;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    > p {
        color: #887367;
        font-size: 12px;
        margin-bottom: 20px;
    }

    > h3 {
        @media only screen and (max-width: 768px) {
            text-align: center;
        }

        @media only screen and (max-width: 425px) {
            font-size: 20px;
        }
    }

    > button {
        font-size: 13px;
        font-weight: 700;
        border-radius: 4px;
        padding-left: 15px;
        padding-right: 15px;
        background-color: #03BAED;
        min-height: auto;
        height: 40px;
        width: fit-content;
        border: none;
    }

    > button:hover {
        background-color: #edcd37;
    }

    > button > a {
        text-decoration: none;
        color: white;
    }

    > button:hover > a {
        color: black;
    }

    @media screen and (max-width: 768px) {
       width: 100%;
       margin-bottom: 10px;
       display: flex;
       flex-direction: column;
       align-items: center;
    }
`;

export default OpeningBoxWrapper;