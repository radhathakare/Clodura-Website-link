import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { rgba } from 'polished';

const playPluse = keyframes`
  0% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`;

export const SponsoredBy = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {
    display: block;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
    display: block;
    margin-top: 25px;
  }
  @media only screen and (max-width: 1440px) {
    margin-top: 30px;
  }
  @media only screen and (max-width: 768px) {
    margin-top: 30px;
    text-align: center;
    justify-content: center;
  }

  @media only screen and (max-width: 480px) {
    align-items: flex-start;
    flex-direction: column;
  }

  .sponsoredBy {
    color: ${rgba('#7CFC00', 0.6)};
    font-size: 20px;
    margin-right: 21px;
    margin-bottom: 0;
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {
      margin: 0 0 20px 0;
    }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
      margin: 0 0 15px 0;
    }
    @media only screen and (max-width: 480px) {
      margin-bottom: 15px;
    }
  }
`;

const SectionWrapper = styled.section`
  width: 100%;
  padding-bottom: 70px;
  position: relative;
  @media only screen and (max-width: 991px) {
    padding-bottom: 60px;
  }
  @media only screen and (max-width: 624px) {
    padding-bottom: 45px;
  }
  &:before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80.5%;
    content: '';
  }
  .container {
    @media only screen and (min-width: 1367px) {
      max-width: 1290px;
    }
  }
`;
export const ExperienceMainWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 30px;
  padding-top: 10px;
  @media only screen and (max-width: 991px) {
    padding-top: 0px;
    padding-bottom: 15px;
  }
`;
export const VideoArea = styled.div`
  display: inline-flex;
  position: relative;
  margin: 0 auto 60px;
  img {
    max-width: 100%;
    object-fit: cover;
    cursor: pointer;
    height: 100%;
    border-radius: 10px;
  }
  .video__btn {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    display: inline-block;
    z-index: 0;
    padding: 0;
    background-color: transparent;
    @media only screen and (max-width: 480px) {
      width: 60px;
      height: 60px;
      line-height: 60px;
    }
    &:before {
      content: '';
      position: absolute;
      z-index: 0;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      display: block;
      width: 80px;
      height: 80px;
      background: ${themeGet('colors.white', '#925B9F')};
      border-radius: 50%;
      animation: ${playPluse} 1.5s ease-out infinite;
    }
    > span {
      color: white;
      position: relative;
      z-index: 5;
      display: block;
      border-radius: inherit;
      height: 100%;
      width: 100%;
      svg {
        width: 50px;
        height: 50px;
        @media only screen and (max-width: 480px) {
          width: 35px;
          height: 35px;
        }
      }
    }
  }
`;
export const VideoWrapper = styled.div`
  max-width: 100%;
  position: relative;
  width: 900px;
  &:before {
    content: '';
    display: block;
    padding-top: 56.25%;
  }
  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const ClientWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  @media only screen and (max-width: 624px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media only screen and (max-width: 480px) {
    padding-left: 0px;
    padding-right: 0px;
  }
  .client__text {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &:before {
      position: absolute;
      content: '';
      height: 1px;
      width: 100%;
      top: 50%;
      left: 0;
    }
    span {
      position: relative;
      font-size: 16px;
      margin-bottom: 0;
      z-index: 2;
      padding: 0 30px;
      line-height: 1.8;
      text-align: center;
      color: ${themeGet('colors.secondary', '#696871')};
      @media only screen and (max-width: 768px) {
        padding: 0 15px;
      }
    }
  }
`;
export const ExperienceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;
  @media only screen and (max-width: 991px) {
    padding: 0;
  }
  .experience__item {
    width: 50%;
    margin: 0 0 40px;
    @media only screen and (max-width: 624px) {
      width: 100%;
    }
    .experience__image{
      width:200px;
      height:200px;
      border-radius: 10px;
    }
  }
  
  .experience__item {
    display: flex;
    align-items: flex-start;
    padding: 0px 70px;
    @media only screen and (max-width: 1366px) {
      padding: 0px 40px;
    }
    @media only screen and (max-width: 1219px) {
      padding: 0px 15px;
    }
    @media only screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 0px 15px;
    }
    @media only screen and (max-width: 624px) {
      padding: 0px 50px;
    }
    @media only screen and (max-width: 480px) {
      padding: 0px;
    }
    .icon__wrapper {
      margin-right: 20px;
      flex-shrink: 0;
      @media only screen and (max-width: 768px) {
        margin-bottom: 15px;
        margin-right: 0px;
      }
    }

    h4 {
      margin: -3px 0 18px;
      font-weight: 700;
      font-size: 18px;
      line-height: 1.6;
      color: ${themeGet('colors.headingColor', '#0F2137')};
      @media only screen and (max-width: 768px) {
        text-align: center;
        line-height: 1.45;
        margin: 5px 0 15px;
      }
    }

    p {
      color: ${themeGet('colors.textColor')};
      font-size: 15px;
      line-height: 1.9;
      margin: 0;
    }
  }
`;




export default SectionWrapper;
