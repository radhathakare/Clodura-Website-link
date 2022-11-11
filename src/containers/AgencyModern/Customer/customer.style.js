import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { rgba } from 'polished';

const SectionWrapper = styled.section`
  margin-top : -170px;
  @media only screen and (max-width: 1440px) {
    padding: 70px 0 30px;
  }
  @media only screen and (max-width: 768px) {
    padding: 50px 0 0;
  }

`;


export const Section = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Subscribe = styled.div`
  display: flex;
  margin-top: 40px;
  @media only screen and (max-width: 1440px) {
    margin-top: 30px;
  }
  @media only screen and (max-width: 768px) {
    max-width: 80%;
    margin: 0 auto;
  }
  @media only screen and (max-width: 480px) {
    max-width: 100%;
    margin: 0 auto;
    flex-direction: column;
  }

  @media only screen and (max-width: 480px) {
    align-items: center;
  }
  .reusecore__input {
    width: 100%;
  }
  .field-wrapper {
    margin-right: 15px;
    @media only screen and (max-width: 480px) {
      margin-right: 0px;
    }
    input {
      font-family: Poppins;
      font-size: 16px;
      min-height: 60px;
      padding: 0 24px;
      border-radius: 8px;
      ::placeholder {
        color: ${rgba('#02073E', 0.4)};
        opacity: 1; /* Firefox */
      }
      &:focus {
        border-color: #ff825c;
      }

      @media only screen and (max-width: 1280px) {
        min-height: 50px;
      }
    }
  }
  button {
    background-color: #0000FF;
    min-width: 150px;
    border-radius: 8px;

    @media only screen and (max-width: 480px) {
      min-width: 100%;
      margin-top: 15px;
    }
  }
`;

export const SponsoredBy = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
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

export const Content = styled.div`
  width: 50%;
  @media only screen and (min-width: 1024px) and (max-width: 1366px) {
    width: 50%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 50%;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  h2 {
    font-weight: 700;
    font-size: 36px;
    line-height: 1.66;
    letter-spacing: -1px;
    @media only screen and (min-width: 1024px) and (max-width: 1440px) {
      font-size: 30px;
      line-height: 1.5;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 24px;
    }
    @media only screen and (max-width: 768px) {
      font-size: 24px;
      text-align: center;
    }
  }
  p {
    font-size: 15px;
    line-height: 42px;
    @media only screen and (min-width: 1024px) and (max-width: 1366px) {
      line-height: 32px;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      line-height: 28px;
    }
    @media only screen and (max-width: 768px) {
      line-height: 32px;
      text-align: center;
    }
  }
  .explore {
    color: ${themeGet('colors.linkColor')};
    font-weight: 700;
    font-size: 15px;
    line-height: 42px;
    display: inline-flex;
    align-items: center;
    @media only screen and (max-width: 768px) {
      justify-content: center;
      width: 100%;
    }
    i {
      line-height: 1;
      margin-left: 2px;
      transition: 0.3s ease 0s;
    }
    &:hover i {
      margin-left: 7px;
    }
    @media only screen and (min-width: 1024px) and (max-width: 1440px) {
      margin-top: 5px;
    }
    @media only screen and (max-width: 768px) {
      margin-top: 5px;
    }
  }
`;

export const Illustration = styled.figure`
  width: 50%;
  margin: 0 5% 0 0;
  @media only screen and (max-width: 768px) {
    margin-bottom: 30px;
    width: 100%;
  }
`;
export default SectionWrapper;
