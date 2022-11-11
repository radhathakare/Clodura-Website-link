import styled from "styled-components";

const CounterWrapper = styled.section`
    button {
        background-color: white;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid black;
        font-size: 14px;
        cursor: pointer;
    }
`;

export const RenderedBlockWrapper = styled.div`
    display: flex;
    justify-content: center;

    > div {
        cursor: pointer;
        display: flex;
        width: 50px;
        height: 50px;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        border-radius: 5px;
        margin-left: 5px;
        margin-right: 5px;
    }
`;

export default CounterWrapper;