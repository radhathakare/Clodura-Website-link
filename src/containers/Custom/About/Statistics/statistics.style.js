import styled from 'styled-components';

const Section = styled.section`
  color: #391400;
  display: flex;
  max-width: 70%;
  margin: 0 auto;
  padding: 0;
  
  @media screen and (max-width: 576px) {
      flex-direction: column;
  }

  .colored {
    background-color: #FEEEE2;
  }

  div {
    flex: 0.33;
    padding: 20px;
    border: 2px solid #FEEEE2;
  }

  div > h1 {
    font-size: 42px;
    font-weight: 700;
  }

  div > p {
    font-size: 16px;
    font-weight: 500;
  }
`;

export default Section;
