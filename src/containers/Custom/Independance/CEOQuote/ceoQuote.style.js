import styled from "styled-components";

const CEOQuoteWrapper = styled.div`
    max-width: 70%;
    padding: 30px 0 30px 0;
    margin: auto;
    @media screen and (max-width: 576px) {
        max-width: 90%;
    }
    > div {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 30px 60px 30px 60px;
        background-color: #8E3A8D;
        border-radius: 15px;
        box-shadow: 0 0 10px 0 lightgray;

        @media screen and (max-width: 768px) {
            flex-direction: column;
        }
        @media screen and (max-width: 450px) {
            padding: 20px 20px 20px 20px;
        }
    }

    .ceo-quote-text {
        width: 40%;
        color: white;
        @media screen and (max-width: 768px) {
            width: 100%;
            margin-bottom: 20px;
        }
        > h5 {
            font-size: 18px;
            font-weight: 600;
            margin: 0;
        }
    }
    .ceo-quote-media {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 35%;
        
        h3 {
            margin-top: 10px;
            margin-bottom: 0;
            color: #FFFFFF;
        }

        p {
            color: #86BC4C;
        }

        @media screen and (max-width: 768px) {
            width: 100%;
        }
    }

    .ceo-quote-media > div {
        width: 50%;
        border-radius: 50% 50%;
    }
`

export default CEOQuoteWrapper;