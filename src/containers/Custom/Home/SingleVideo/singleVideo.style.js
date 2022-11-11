import styled from "styled-components";

const SingleVideoWrapper = styled.section`
    padding: 60px;
    padding-left: 20vw;
    padding-right: 20vw;

    .video-container {
        position: relative;
        width: 100%;
        padding-bottom: 56.25%;
    }

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
        box-shadow: 0 0 10px 0 lightgray;
    }

    @media screen and (max-width: 768px) {
        padding: 30px;
        padding-left: 10px;
        padding-right: 10px;
    }
`;

export default SingleVideoWrapper;