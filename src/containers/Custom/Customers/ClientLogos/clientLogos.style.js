import styled from "styled-components";

const ClientLogosWrapper = styled.section`

`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`;

export const SpecialImage = styled.img`
    width: 16%; 
    aspect-ratio: ${props => (props.propWidth/props.propHeight)};
`;

export default ClientLogosWrapper;