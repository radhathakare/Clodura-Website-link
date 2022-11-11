import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const HomeSignUpWrapper = styled.section`
  padding: 30px 60px;
  overflow: hidden;
  
  @media (max-width: 990px) {
    padding: 60px 0;
  }
  @media (max-width: 767px) {
    padding: 30px 0 60px 0;
  }

  .video-container {
    text-align: center;
  }

  .video-button {
    background-color: #2CC5F0;
    margin: 0 auto;
  }

  .figure {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    @media (min-width: 1200px) {
      width: 930px;
    }

    img {
      border-radius: 4px;
    }

    .fig__caption {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;

      .reusecore__button {
        .btn-icon {
          background-color: ${themeGet('colors.white', '#ffffff')};
          line-height: 0.4;
        }
      }
    }
  }
`;

export default HomeSignUpWrapper;
