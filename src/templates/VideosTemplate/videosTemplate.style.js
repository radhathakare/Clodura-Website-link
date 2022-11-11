import styled from "styled-components";

const VideosDetailWrapper = styled.section`
    max-width: 70%;
    margin: 80px auto;

    .icons {
        display:flex;
        align-items: center;
        border-bottom: 1px solid gray;
        
        > p {
            font-size: 14px;
            padding: 0;
            margin-left: 5px;
            margin-right: 25px;
        }
    }
        
    .texttime {
        margin:10px;
    }

    h5 {
        margin: 0;
        margin-right: 10px;
        padding: 0;
    }
`;

export default VideosDetailWrapper;