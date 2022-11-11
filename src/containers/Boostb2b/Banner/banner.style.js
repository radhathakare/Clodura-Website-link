import styled from 'styled-components';

export const BannerWrapper = styled.section`
  padding: 125px 0 0 0;
  max-width: 70%;
  margin: 0 auto;
  background-size: cover;
  background-position: top center;
  @media (max-width: 575px) {
    padding: 120px 0 0 0;
  }
.firstheading-container{

    line-height: 0.3;
    margin-left:30px;
    margin-right: 30px;
    text-align: center;
    font-size: 30px;
}
  .headings-container {
    font-size: 60px;
    letter-spacing: -0.025em;
    margin-bottom: 15px;
    line-height: 1.8;
    margin-left:30px;
    margin-right: 30px;
    text-align: center;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .fill-input {
    font-size: 14px;
    border-radius: 4px;
    border: 2px solid rgb(3, 186, 237);
    padding: 8px 22px;
    min-width: 350px;
    min-height: auto;
    margin-right: 20px;
  }

  .anim_container {
    box-shadow: 0 0 10px 0 lightgray;
  }
  
  @media only screen and (max-width: 560px) {
    .fill-input {
      min-width: 250px;
    }
  }

  @media only screen and (max-width: 440px) {
    .email-signup {
      flex-direction: column;
    }
    .email-signup > a {
      margin-top: 10px;
    }
  }
  @media only screen and (max-width: 400px) {
    .fill-input {
      min-width: 150px;
    }
  }
`;

export const DiscountWrapper = styled.div`
  text-align: center;
`;

export const Headings = styled.div`
  font-family: 'Poppins', sans-serif;
`;

export const DiscountLabel = styled.div`
  font-family: 'Poppins', sans-serif;
  display: inline-block;
  border-radius: 4em;
  padding: 9px 22px;
  margin-bottom: 22px;
  background-color: rgba(255, 255, 255, 0.15);
  @media (max-width: 575px) {
    padding: 7px 10px;
  }
`;
