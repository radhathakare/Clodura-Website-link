import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Section = styled.section`
  padding-top: 40px;
  padding-bottom: 75px;
  @media only screen and (max-width: 767px) {
    padding-top: 20px;
    padding-bottom: 40px;
  }
  .container {
    @media only screen and (max-width: 1366px) {
      max-width: 1170px;
    }
    @media only screen and (max-width: 1024px) {
      max-width: 960px;
    }
  }
`;

export const SectionHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h4 {
    font-family: Poppins;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    margin: 0;
    color: ${themeGet('colors.textColorAlt')};
    @media only screen and (min-width: 768px) {
      font-size: 20px;
    }
    @media only screen and (min-width: 1024px) {
      font-size: 24px;
      line-height: 34px;
    }
    span {
      color: ${themeGet('colors.linkColor')};
    }
    @media (max-width: 480px) {
      text-align: center;
    }
  }
`;

export const Figure = styled.figure`
  margin: 0;
  text-align: center;
  span {
    margin-left:5px;
    margin-right:10px;

  }

`;

export const SliderWrapper = styled.div`
  margin-top: 55px;
  max-width: 1050px;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (max-width: 767px) {
    margin-top: 45px;
  }
  .slider {
    display: flex;
    justify-content: space-between;
  }
  figure {
    img {
      font-size: 30px;
      width:150px;
    }
  }

`;
export const RatingInfo = styled.div`
display: flex;
align-items: center;
margin-bottom: 22px;
margin-top:20px;
margin-left:35px;
color: ${themeGet('colors.menu', '#0D233E')};

.rating {
  margin-right: 10px;
  .star {
    color: ${themeGet('colors.yellow', '#FFA740')};
  }
  .star-o {
    color: #e8e8e8;
  }
}

img {
  margin-left: 9px;
}
`;

export default Section;
