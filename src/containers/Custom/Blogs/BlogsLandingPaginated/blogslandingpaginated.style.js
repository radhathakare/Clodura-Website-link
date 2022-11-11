import styled from "styled-components";

const BlogLandingWrapper = styled.section`
    display: flex;
    max-width: 70%;
    margin: 0 auto 50px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }

    .blog-container {
        width: 33%;

        @media screen and (max-width: 768px) {
            width: 100%;
        }

        > .objectWrapper {
            aspect-ratio: 660/420;
        }
    }
    
    .metaDescription {
        font-size: 14px;

        min-height: 130px;
        max-height: 130px;
        overflow: hidden;
        
        @media only screen and (max-width: 1440px) {
            min-height: 150px;
            max-height: 150px;
        }

        @media only screen and (max-width: 768px) {
            min-height: unset;
            max-height: unset;
        }
        
    }

    > div {
        padding: 10px;

        @media screen and (max-width: 768px) {
            padding: 0;
            padding-bottom: 10px;
        }

        > a {
            cursor: pointer;
            color: black;

            :hover {
                color: blue;
            }

            > h2 {
                font-size: 18px;
                margin-top: 10px;
                min-height: 85px;
                max-height: 85px;
                overflow: hidden;
                
                @media only screen and (max-width: 1440px) {
                    min-height: 110px;
                    max-height: 110px;
                }

                @media only screen and (max-width: 768px) {
                    min-height: unset;
                    max-height: unset;
                }
            }   
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

export default BlogLandingWrapper;