import styled from "styled-components";

const MainDisplayWrapper = styled.section`
    max-width: 70%;
    margin: 40px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const IntegrationCardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    @media only screen and (max-width: 1024px) {
        justify-content: center;
    }
`;

export const IntegrationCard = styled.div`
    flex: 0.33;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 lightgray;
    margin-right: 20px;
    margin-bottom: 40px;

    @media only screen and (max-width: 1024px) {
        flex: 1;
    }
    
    .top {
        display: flex;
        justify-content: center;
        background-color: #EBEBEB;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .bottom {
        display: flex;
        align-items: center;
        padding: 20px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;

        h5 {
            font-weight: 400 !important;
            color: black;
            margin: 0;
        }
    }
`;

export default MainDisplayWrapper;