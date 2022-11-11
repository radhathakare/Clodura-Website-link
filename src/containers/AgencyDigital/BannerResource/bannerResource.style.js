import styled from 'styled-components';

export const ContentWrapper = styled.div`
  max-width: 90%;
  margin: 150px auto 50px auto;
  padding: 0;
  display: flex;
  border-bottom: 1px solid gray;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const BannerPart1 = styled.div`
    display: flex;
    flex: 0.55;
    flex-direction: column;
    justify-content: center;
    order: 2;

    > h1 {
      font-size: 24px;
    }

    > div > p {
      font-size: 14px;
    }

    @media screen and (max-width: 480px) {
      > h1 {
        font-size: 20px;
      }
    }

    @media screen and (max-width: 768px) {
      order: 2;
    }
`;

export const BannerPart2 = styled.div`
    flex: 0.45;
    margin-left: 20px;
    order: 1;
    display: flex;
    justify-content: center;


    > img {
      border-radius: 20px;
    }

    @media screen and (max-width: 768px) {
      order: 1;
    }
`;