import styled from 'styled-components';

const ScrollVideoContainer = styled.section`
  .Container {
    max-width: 70%;
    display: flex;
    align-items: flex-start;
    padding: 30px 0 30px 0;
    @media (max-width: 991px) {
      flex-direction: column;
      justify-content: center;
    }
    @media screen and (max-width: 576px) {
      max-width: 90%;
    }
  }
`;

export const Left = styled.div`
  width: 40%;
  padding: 0 60px 0 0;
  align-self: flex-start;
  
  @media (max-width: 991px) {
     order: 3;
     width: 100%;
  }

  h2 {
    font-size: 20px;
  }

  span {
    display: flex;
    cursor: pointer;
  }

  span div p, span div h3 {
    transition: all ease-in-out 0.6s;
  }

  .para-shown {
    opacity: 1;
    margin-bottom: 40px;
    font-size: 14px;
    min-height: 210px;
  }
  
  .para-hidden {
    opacity: 0;
    margin-bottom: 40px;
    font-size: 14px;
  }

  .progress-tracker-component {
    margin-right: 10px;
  }

  .bullet {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #F58634;
    background-color: #FDE7D6;
    font-size: 20px;
    font-weight: 600;
    border-radius: 50% 50%;
    height: 35px;
    width: 35px;
  }

  .progress-bar-container {
    height: 100%;
    background-color: #FDEBDD;
    width: 10%;
    margin-left: 15px;
  }

  .progress-bar {
    background-color: #F58634;
    height: 0;
    width: 100%;
    transition: all ease-in-out 1s;
  }

  @media screen and (max-width: 375px) {
    .para-shown, .para-hidden {
      font-size: 12px;
    }

    h2 {
      font-size: 20px;
    }
  }
  `;

export const Right = styled.div`
  width: 60%;
  height: 530px;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  > img {
    height: 50%;
  }

  @media (max-width: 991px) {
      width: 100%;
      height: unset;

      > img {
        width: 100%;
        height: unset;
      }
  }

  > div {
    width: 100%;
  }
`;

export default ScrollVideoContainer;
