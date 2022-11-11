import styled from "styled-components";

const TwoPartWrapper = styled.section`
    max-width: 70%;
    margin: 0 auto;

    @media screen and (max-width: 576px) {
        max-width: 90%;
    }
`;

export const TwoPartHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #E9E9F0;
    height: 60px;

    > h3 {
        height: 100%;
        margin-bottom: 0;
        padding: 6px;
        cursor: pointer;

        @media screen and (max-width: 480px) {
            font-size: 14px;
        }
    }

    h3:first-child {
        margin-right: 20px;
    }
`;

export default TwoPartWrapper;