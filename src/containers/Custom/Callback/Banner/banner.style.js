import styled from "styled-components";

const BannerWrapper = styled.section`
    margin-top: 60px;
    background-color: #F2FBFE;
    height: 300px;
    text-align: center;
    padding-top: 60px;
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 36px;
    }

    .image-box {
        align-self: center;
    }

    @media screen and (max-width: 400px) {
        font-size: 12px;

        h1 {
            font-size: 30px;
        }
    }
`;

export default BannerWrapper;