import styled from "styled-components";

const VideosContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    @media only screen and (max-width: 768px) {
        max-width: 100%;
    }
    
    div {
        width: fit-content;
        padding: 20px;
        height: fit-content;
        background-color: white;
        box-shadow: 0 0 10px 0 lightgray;
        margin-bottom: 10px;
    }
    
    @media screen and (max-width: 1024px) {
        iframe{
            width: 400px;
            height: 225px;
        }
    }
    @media screen and (max-width: 650px) {
       iframe{
           width: 100%;
           height: 100%;
       }
    }
`;

export default VideosContainer;