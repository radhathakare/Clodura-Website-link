import styled from 'styled-components';

export const ContentWrapper = styled.div`
  max-width: 70%;
  margin: 150px auto 50px auto;
  padding: 0;
  padding-bottom: 10px;
  display: flex;
  border-bottom: 1px solid gray;

  @media screen and (max-width: 1400px) {
    flex-direction: column;
  }

  .tag {
      font-size: 16px;
      color: #ACD184;
  }

  .iconcontainer {
    display:flex;
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
  .texttime {
    margin: 10px;
  }
`

export const BannerPart1 = styled.div`
    display: flex;
    flex: 0.55;
    flex-direction: column;

    > h1 {
      font-size: 32px;
    }

    > p {
      font-size: 20px;
    }

    @media screen and (max-width: 1400px) {
      order: 2;
    }
`;

export const BannerPart2 = styled.div`
    flex: 0.45;
    margin-left: 20px;

    > img {
      border-radius: 20px;
    }

    @media screen and (max-width: 1400px) {
      order: 1;
      display: flex;
      justify-content: center;
    }
`;