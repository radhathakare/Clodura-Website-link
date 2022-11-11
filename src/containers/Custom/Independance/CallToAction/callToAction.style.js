import styled from 'styled-components';

const CallToActionArea = styled.section`
margin-top: 0;
.Container {
    max-width: 70%;
    padding: 0;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media (max-width: 991px) {
      flex-direction: column;
      text-align: center;
      justify-content: center;
    }
    @media screen and (max-width: 576px) {
      max-width: 90%;
    }
  }
  h3 {
    letter-spacing: -0.02em;
    font-size: 48px;
    line-height: 1.81;
    margin-bottom: 0;
    @media (max-width: 1600px) {
      font-size: 40px;
    }
    @media (max-width: 991px) {
      margin-bottom: 0;
    }
    @media (max-width: 575px) {
      font-size: 26px;
      line-height: 1.6;
    }
  }
  p {
    text-align: center;
    font-size: 19px;
    color: #0f2137;
    opacity: 0.7;
    line-height: 1.84;
    letter-spacing: 0.1px;
    @media (max-width: 575px) {
      font-size: 16px;
    }
  }
`;
export const Left = styled.div`
  @media (max-width: 991px) {
    margin-bottom: 30px;
  }
`;
export const Right = styled.div`
  > a {
    display: inline-block;
    background-color: #108aff;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    padding: 20px 35px;
    border-radius: 30px;
    transition: all 500ms ease;
    &:hover {
      background-color: #23374d;
    }
    > i {
      margin-left: 5px;
    }
  }
`;

export default CallToActionArea;
