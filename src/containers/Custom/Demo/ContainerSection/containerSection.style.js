import styled from "styled-components"

const ContainerSectionWrapper = styled.div`
    margin: 60px;
    margin-top: -150px;
    display: flex;
    justify-content: space-around;

    .calendly-inline-widget {
        width: 45%;    
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        margin: -120px auto;
        .calendly-inline-widget {
            width: 90%;    
        }
    }
`;

export default ContainerSectionWrapper;