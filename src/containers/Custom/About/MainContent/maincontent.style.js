import styled from 'styled-components';

const MainContentWrapper = styled.section`
    > p {
        color: #FACFAF;
        letter-spacing: 1px;
    }

    

    .main-content {
        display: flex;
    }

    .main-content h1 {
        font-size: 36px;
        font-weight: 700;
        flex: 0.35;
        margin-right: 20px;
    }
    
    .main-content > div {
        flex: 0.65;
    }

    @media screen and (max-width: 576px) {
        .main-content {
            flex-direction: column;
        }
    }
`;

export const ImagesSection = styled.section`
    display: flex;
    margin-top: 100px;
    margin-bottom: 100px;

    
    .image-row {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .image-row > div {
        width: 100%;
    }

    @media screen and (max-width: 576px) {
        flex-direction: column;
    
        .image-row {
        flex-direction: row;
        justify-content: space-between;
        }

        .image-row > div:first-child {
            margin-right: 40px;
        }
    }
`

export default MainContentWrapper;
