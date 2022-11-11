import styled from "styled-components"

const QuoteWrapper = styled.div`
    width: 45%;
    background-color: #E8E8E8;
    padding: 60px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media screen and (max-width: 768px) {
        width: 90%;
        padding: 0;
    }

    p:first-child {
        font-style: italic;
        font-size: 15px;
    }

    h4 {
        margin-bottom: 0;
        margin-top: 10px;
    }
`;

export default QuoteWrapper;