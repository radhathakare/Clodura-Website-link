import styled from "styled-components";

export const ResourceLandingWrapper = styled.section`
    display: flex;
    max-width: 70%;
    margin: 80px auto 0;
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
    
    .objectWrapper {
        width: 50%;
        @media screen and (max-width: 1024px) {
            width: 100%;
        }
    }
    
    .metaDescription {
        font-size: 14px;
        
        @media screen and (max-width: 1024px) {
            text-align: center;
            font-size: 12px;
        }
    }
    
    > section {
        display: flex;
        max-width: 50%;
        padding: 10px;
        
        @media screen and (max-width: 1024px) {
            flex-direction: column;
        }
        
        @media screen and (max-width: 768px) {
            max-width: 100%;
            padding: 0;
            padding-bottom: 10px;
        }

        > div {
            display: flex;
            flex-direction: column;
            justify-content: center;

            > .tag {
                font-size: 13px;
                color: #ACD184;
            }
            
            > a {
                cursor: pointer;
                color: black;
                
                :hover {
                    color: blue;
                }
                
                > h2 {
                    font-size: 18px;
                    min-height: 110px;

                    @media screen and (max-width: 1024px) {
                        font-size: 16px;
                        text-align: center;
                    }

                    @media screen and (max-width: 768px) {
                        min-height: unset;
                    }
                }   
            }
        }
    }
    `;

export const Headingresouce = styled.section`
.headings-container{
    font-size: 40px;
    letter-spacing: -0.025em;
    margin-bottom: 10px;
    line-height: 1.8;
    margin-top:20px;
    margin-left:30px;
    margin-right: 30px;
    text-align: center;
`;

export const buttonread = styled.section`
.readbutton{
    
    margin-bottom: 15px;
    line-height: 1.8;
    margin-left:30px;
    margin-right: 30px;
    text-align: center;
`;