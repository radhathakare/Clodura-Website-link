import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const FooterWrapper = styled.footer`
  .copyright {
    text-align: center;
    color: #707070;
    margin: 0;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .copyright > a {
    color: #707070;
  }

  .vidAlign-container {
    margin-top: -150px;
    padding-top: 120px;
    background-color: black;
    color: white;
    height: 100%;
    max-width: 100%;
  }
`;

export const FooterInner = styled.div`
  display: flex;
  justify-content: space-around;

  @media only screen and (max-width: 991px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  > div {
    @media only screen and (max-width: 991px) {
      flex-wrap: wrap;
      width: 33%;
      margin-bottom: 30px;
    }
    @media only screen and (max-width: 480px) {
      flex-wrap: wrap;
      width: 100%;
      margin-bottom: 30px;
    }
  }
`;

export const CopyrightInfo = styled.div`
  margin-right: 0px;
  color: white;

  img {
    width: 30px;
    height: 30px;
  }

  p {
    font-size: 14px;
    line-height: 18px;
    margin-top: 24px;
    a {
      color: white;
    }
  }
  .copyright {
    color: white;
    margin-top: 20px;
  }

    @media only screen and (max-width: 991px) {
      width: 100% !important;
    }
`;

export const FooterWidget = styled.div`
  h4 {
    font-family: Poppins;
    letter-spacing: -0.5px;
    color: white;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
  }
`;

export const Nav = styled.nav`
  a {
    color: white;
    display: flex;
    align-items: center;
    font-size: 15px;
    line-height: 2.5;
    transition: 0.3s ease 0s;
    img {
      margin-right: 12px;
    }
    &:hover {
      color: ${themeGet('colors.primary')};
    }
  }
`;

export const Socials = styled.section`
  > div {
    display: flex;
    margin-bottom: 40px;
  }

  > div > a {
    display: flex;
    align-items: center;
    color: #03BAED;
  }

  > div svg {
    height: 20px;
    width: 20px;
    margin-right: 10px;
    color: white;
    border: 1px solid white;
    border-radius: 50% 50%;
    padding: 10px;
  }
`;

export default FooterWrapper;
