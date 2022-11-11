import styled from "styled-components";

const RatingsWrapper = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 90%;
    margin: 0px auto;
    padding: 0;
    font-size: 16px;

    .rating {
        color: gold;
        font-size: 20px;
        max-width: 100%;
    }

    @media only screen and (max-width: 768px) {
        font-size: 24px;
        max-width: 70%;
        flex-direction: column;
        
        .rating {
            font-size: 32px;
        }
    }

    @media only screen and (max-width: 375px) {
        font-size: 16px;
        .rating {
            font-size: 20px;
        }
    }
`;

export const CardContainer = styled.div`
    max-width: 30%;
    background-color: white;
    box-shadow: 0 0 10px 0 lightgray;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 220px;

    img {
        width: 100%;
        margin-bottom: 10px;
        min-height: 80px;
        object-fit: contain;
    }

    @media only screen and (max-width: 768px) {
        max-width: unset;
        width: 100%;
        margin-bottom: 20px;
    }
`;

export default RatingsWrapper;