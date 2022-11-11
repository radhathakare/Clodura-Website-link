import styled from 'styled-components';

const BlockWrapper = styled.div`
  max-width: 70%;
  padding: 0;
  margin: 80px auto;

  img {
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    .row {
      flex-direction: column;
    }

    .col {
      width: 100% !important;
    }

    .coldown {
      order: 2;
    }

    .colup {
      order: 1;
    }
  }
`;

export const ContentWrapper = styled.div`
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  @media only screen and (max-width: 1440px) {
    padding-left: 10px;
    padding-right: 10px;
  }
  @media only screen and (max-width: 991px) {
    padding-left: 0;
    padding-right: 0;
  }

  h4 {
    margin-top: 0;
  }

  p, li {
    font-size: 16px;
  }
`;

export default BlockWrapper;
