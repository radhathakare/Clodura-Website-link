import styled from "styled-components";

const ScrollSpyContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    a {
        cursor: pointer;
    }
    
    .highlight {
        background-color: white;
        padding: 20px !important;
    }

    > .extra-container {
        position: absolute;
        top: 55px;
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        box-shadow: 0 0 10px 0 gray;

        > h4 {
            margin: 0;
            background-color: white;
            padding: 20px;
        }
    }

    @media only screen and (max-width: 991px) {
        > .extra-container {
            position: relative;
            top: 0;
        }
    }
`;

export default ScrollSpyContainer;

