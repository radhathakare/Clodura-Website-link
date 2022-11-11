import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Bannerstar from 'common/assets/image/rstar.png';

const WorkHistoryWrapper = styled.section`
  padding: 50px  80px;
  overflow: hidden;
  
  @media (max-width: 990px) {
    padding: 50px 0 60px 0;
  }

  .quote-wrapper {
    width: 350px;
    height: 350px;
    margin-top:-240px; 
  }
  .applycode{
   
 margin-top:150px;   
  }
  .text {
    width: 100%;
  height: 100%;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 128, 172, 1) 0%,
    rgba(0, 128, 172, 1) 70%,
    rgba(0, 128, 172, 0) 70.3%
  );
  position: relative;
  text-align: center;
   padding:2px;
  color: white;
    }
    
    
  .feature__block {
    padding-right: 132px;
    @media only screen and (max-width: 1200px) {
      padding-right: 32px;
    }
    @media only screen and (max-width: 991px) {
      padding-right: 0;
      margin-bottom: 0;
    }
    @media only screen and (max-width: 767px) {
      padding-right: 0;
      margin-bottom: 40px;
    }
    .reusecore__button {
      transition: all 0.3s ease;
      &:hover {
        box-shadow: 0px 9px 20px -5px rgba(16, 172, 132, 0.57);
      }
    }
  }
  
`;
const BannerSquareShape = styled.div`
width: 750px;
height: 360px;
  position: absolute;
  left: 8%;
  top: 1%;
  z-index: -1;
  pointer-events: none;
  background-image: url(${Bannerstar});
  @media (max-width: 1300px) {
    
    transform: rotate(103deg);
    position: absolute;
    left: 34%;
  }
  @media (max-width: 1100px) {
    display: none;
  }
  .starh1 h1{
    text-decoration: line-through;
  }
  .startitle p{
    height: 100%;
      font-size: 40px;
      line-height: 1.50;
      padding: 40px;
      margin : 5%;
      text-align: center;
      font-style: italic;
      text-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.3);

  }
  .startitle::before {
    content: "";
    width: 30%;
    height: 100%;
    float: left;
    shape-outside: polygon(
      0 0,
      98% 0,
      50% 6%,
      23.4% 17.3%,
      6% 32.6%,
      0 50%,
      6% 65.6%,
      23.4% 82.7%,
      50% 94%,
      98% 100%,
      0 100%
    );
    shape-margin: 7%;
  }
  
  .startitle p::before {
    content: "";
    width: 50%;
    height: 100%;
    float: right;
    shape-outside: polygon(
      2% 0%,
      100% 0%,
      100% 100%,
      2% 100%,
      50% 94%,
      76.6% 82.7%,
      94% 65.6%,
      100% 50%,
      94% 32.6%,
      76.6% 17.3%,
      50% 6%
    );
    shape-margin: 7%;
  }
`;
const CounterUpArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: -10px;
  z-index:0;

  @media only screen and (max-width: 1200px) {
    padding-left: 0;
  }
  @media only screen and (max-width: 991px) {
    padding-right: 0;
    margin-left: -25px;
  }
  @media only screen and (max-width: 480px) {
    margin-left: 0;
  }
  .card {
    width: calc(50% - 25px);
    margin-left: 25px;
    margin-bottom: 27px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: box-shadow 0.7s ease-in-out;
    @media (max-width: 767px) {
      width: calc(50% - 13px);
      &:nth-child(2n + 1) {
        margin-left: 0;
      }
    }

    &:hover {
      box-shadow: 0px 30px 35px 20px rgba(16, 66, 97, 0.1);
    }

    h3 {
      font-size: 60px;
      font-weight: 300;
      margin: 0 0 20px;
      color: ${themeGet('colors.headingColor', '#0f2137')};
      @media (max-width: 990px) {
        font-size: 40px;
      }
      @media (max-width: 767px) {
        margin-bottom: 10px;
      }
    }

    p {
      color: ${themeGet('colors.headingColor', '#0f2137')};
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 7px;
      @media (max-width: 990px) {
        font-size: 14px;
        text-align: center;
      }
    }

    a {
      color: ${themeGet('colors.linkColor', '#2b9eff')};
      font-weight: 500;
      font-size: 15px;
      text-decoration: underline;
      margin-top: 7px;
      @media (max-width: 1190px) {
        font-size: 14px;
        text-align: center;
      }
    }

    &:nth-child(even) {
      position: relative;
      top: 22px;
    }

    &:last-child {
      box-shadow: none;
      border-radius: 5px;
      border: 2px dashed ${themeGet('colors.inactiveIcon', '#ebebeb')};
    }
  }
`;

export { CounterUpArea,BannerSquareShape};
export default WorkHistoryWrapper;
