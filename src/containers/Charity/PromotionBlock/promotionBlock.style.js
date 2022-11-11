import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const BlockWrapper = styled.div`
  width: 100%;
  padding: 81px 0 51px;
  @media only screen and (max-width: 1440px) {
    padding: 15px 0 40px;
  }
  @media only screen and (max-width: 1360px) {
    padding: 15px 0 20px;
  }
  @media only screen and (max-width: 991px) {
    padding: 15px 0 10px;
  }

  .row {
    align-items: center;
    @media only screen and (max-width: 767px) {
      flex-direction: column;
    }
    .col {
      > img {
        width: 100%;
      }
      @media only screen and (max-width: 767px) {
        &:first-child {
          order: 2;
          margin-top: 15px;
        }
      }
    }
  }
`;

export const ContentWrapper = styled.div`
  padding-right: 50px;
  @media only screen and (max-width: 1440px) {
    padding-right: 40px;
  }
  @media only screen and (max-width: 991px) {
    padding-right: 0;
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
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 40px;
    @media only screen and (max-width: 1440px) {
      font-size: 28px;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 24px;
      margin-bottom: 27px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 20px;
      margin-bottom: 20px;
    }
    @media only screen and (max-width: 767px) {
      font-size: 18px;
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
