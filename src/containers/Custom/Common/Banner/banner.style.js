import styled from "styled-components";

const BannerWrapper = styled.section`
    margin-top: 60px;
    background-color: #F2FBFE;
    height: fit-content;
    text-align: center;
    padding: 5px;
    padding-top: 60px;
    padding-bottom: 150px;

    z-index: ${props => props.z};

    h1 {
        font-size: 36px;
    }

    @media screen and (max-width: 1024px) {
        font-size: 24px;
    }

    @media screen and (max-width: 425px) {
        font-size: 14px;

        h1 {
            font-size: 30px;
        }
    }
`;

export default BannerWrapper;