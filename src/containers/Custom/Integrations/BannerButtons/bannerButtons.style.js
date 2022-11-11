import styled from "styled-components";

const BannerButtonsWrapper = styled.section`
    margin: 0 auto;
    max-width: 70%;
    padding: 0;
    display: flex;
    justify-content: space-between;
    
    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }

    button {
        height: fit-content;
        flex: 0.24;

        @media only screen and (max-width: 768px) {
            flex: 1;
            margin-bottom: 5px;
        }
    }
`;

export default BannerButtonsWrapper;