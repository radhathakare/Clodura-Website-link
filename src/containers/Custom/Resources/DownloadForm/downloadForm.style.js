import styled from "styled-components";

const DownloadFormWrapper = styled.section`
    box-shadow: 0 0 10px 0 lightgray;
    width: 80%;
    margin: 40px auto;
    border-radius: 10px;
`;

export const FormHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-bottom: 1px solid lightgray;
    padding-top: 20px;
    
    .main-logo {
        width: 40%;
        margin: 0 auto;
    }
    p {
        font-size: 20px;
        text-transform: capitalize;

        @media screen and (max-width: 425px) {
            font-size: 16px;
        }
    }
`;

export const InputGroup = styled.div`
    padding: 40px;
    padding-top: 15px;
    padding-bottom: 15px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 425px) {
        padding: 15px;
    }

    label {
        font-weight: 700;
        font-size: 16px;

        @media screen and (max-width: 425px) {
            font-size: 14px;
        }
    }

    input {
        height: 50px;
        padding: 10px;
    }
`;

export const InputGroup2 = styled.div`
    padding: 40px;
    padding-top: 15px;
    padding-bottom: 15px;
    display: flex;

    @media screen and (max-width: 425px) {
        padding: 15px;
    }

    label {
        font-weight: 400;
        font-size: 14px;
        padding-left: 10px;

        @media screen and (max-width: 425px) {
            font-size: 12px;
        }
    }
`;

export default DownloadFormWrapper;