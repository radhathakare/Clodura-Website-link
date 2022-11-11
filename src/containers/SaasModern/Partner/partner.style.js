import styled from 'styled-components';

const PartnerSectionWrapper = styled.section`
  margin-top: -50px;
  max-width: 70%;
  margin: auto;

  img {
    width: 100%;
    height: 150px;
    object-fit: contain;
  }

  @media screen and (max-width: 576px) {
    max-width: 90%;
  }

  > h2 {
    font-size: 32px;
    text-align: center;
    margin-bottom: 0;

    @media screen and (max-width: 400px) {
      font-size: 20px;
    }
  }
`;

export default PartnerSectionWrapper;
