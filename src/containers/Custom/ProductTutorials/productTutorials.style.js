import styled from "styled-components";

const ProductTutorialsLandingWrapper = styled.section`
    display: flex;
    max-width: 70%;
    margin: 0 auto 50px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }

    .pt-container {
        width: 33%;

        @media screen and (max-width: 768px) {
            width: 100%;
        }
    }
    
    > div {
        padding: 10px;
        cursor: pointer;

        @media screen and (max-width: 768px) {
            padding: 0;
            padding-bottom: 10px;
        }

        > .tag {
            font-size: 13px;
            color: #ACD184;
        }

        > h2 {
            cursor: pointer;
            font-size: 18px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;  
            overflow: hidden;
            margin-top: 10px;
        }   

        .icons{
            display:flex;
            align-items: center;
            
            > p {
                font-size: 14px;
                padding: 0;
                margin-left: 5px;
                margin-right: 25px;
            }
        }
        .texttime{
            margin:10px;
        }
    }
`;

export const StyledHeading = styled.h1`
    margin: 80px auto 20px auto;
    text-align: center;
    border-bottom: 1px solid black;
`;

export const Overlay = styled.div`
    z-index: 2;
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;

    > button {
        cursor: pointer;
        position: relative;
        right: 10px;
        height: 40px;
        width: 40px;
        border-radius: 50% 50%;
        background-color: white;
        font-size: 18px;
    }
`;

export default ProductTutorialsLandingWrapper;