import styled from "styled-components";

const BannerWrapper = styled.section`
    margin-top: 60px;
    background-color: #F2FBFE;
    height: 300px;
    text-align: center;
    padding-top: 60px;

    h1 {
        font-size: 36px;
    }

    @media screen and (max-width: 400px) {
        font-size: 12px;

        h1 {
            font-size: 30px;
        }
    }
`;

export default BannerWrapper;