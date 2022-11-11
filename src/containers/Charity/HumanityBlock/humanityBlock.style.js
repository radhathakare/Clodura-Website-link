import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const BlockWrapper = styled.div`
  max-width: 70%;
  margin: 0 auto;
  padding: 0;
  
  @media (max-width: 575px) {
    padding: 120px 0 0 0;
  }

  .row {
    align-items: center;
  }
`;

export const ImageWrapper = styled.div`
  padding-right: 20px;
  @media only screen and (max-width: 1360px) {
    padding-right: 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const ContentWrapper = styled.div`
  padding-left: 37px;

  @media only screen and (max-width: 1360px) {
    padding-left: 30px;
  }
  @media only screen and (max-width: 991px) {
    padding-left: 0;
  }
  @media only screen and (max-width: 480px) {
    margin-top: 10px;
  }

  h5 {
    font-size: 16px;
    line-height: 14px;
    font-weight: 600;
    text-transform: uppercase;
    color: ${themeGet('colors.secondary2', '#EE2541')};
    margin-bottom: 30px;
    @media only screen and (max-width: 1440px) {
      margin-bottom: 27px;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 14px;
      margin-bottom: 20px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 13px;
      margin-bottom: 15px;
    }
  }

  h2 {
    font-size: 60px;
    font-weight: 600;
    margin-bottom: 40px;
    word-wrap: break-word;
    @media only screen and (max-width: 1440px) {
      font-size: 56px;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 56px;
      margin-bottom: 27px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 40px;
      line-height: 36px;
      margin-bottom: 20px;
    }
    @media only screen and (max-width: 767px) {
      font-size: 30px;
      line-height: 34px;
    }
  }

  p {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 29px;
    color: ${themeGet('colors.text', '#294859')};
    @media only screen and (max-width: 1440px) {
      font-size: 16px;
      margin-bottom: 27px;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 15px;
    }
    @media only screen and (max-width: 991px) {
      margin-bottom: 20px;
    }
  }

  .learn__more-btn {
    &::before {
      background-color: ${themeGet('colors.primary', '#FCF22B')};
    }
  }
`;

export const List = styled.ul`
  margin-bottom: 50px;
  padding-top: 5px;
  @media only screen and (max-width: 1440px) {
    padding-top: 0;
    margin-bottom: 45px;
  }
  @media only screen and (max-width: 1360px) {
    margin-bottom: 40px;
  }
  @media only screen and (max-width: 991px) {
    margin-bottom: 30px;
  }
`;

export const Item = styled.li`
  font-size: 20px;
  line-height: 40px;
  padding: 10px 0;
  color: ${themeGet('colors.heading', '#060F1E')};
  @media only screen and (max-width: 1440px) {
    font-size: 18px;
    line-height: 30px;
  }
  @media only screen and (max-width: 1360px) {
    font-size: 16px;
    line-height: 24px;
  }
  @media only screen and (max-width: 991px) {
    font-size: 15px;
    line-height: 20px;
  }
`;

export default BlockWrapper;
