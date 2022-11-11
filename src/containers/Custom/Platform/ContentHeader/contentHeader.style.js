import styled from "styled-components";

const ContentHeaderWrapper = styled.section`
    padding: 15px 60px;

    @media only screen and (max-width: 991px) {
      padding: 10px;
    }
`;

export const StyledContentHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #E9E9F0;
    height: 60px;

    > a {
        height: 100%;
        margin-bottom: 0;
        margin-left: 20px;
        padding: 6px;
        cursor: pointer;

        @media screen and (max-width: 480px) {
            font-size: 14px;
        }
    }

    a:first-child {
        margin-left: 0;
    }
`;

export default ContentHeaderWrapper;