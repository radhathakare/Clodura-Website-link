import styled from 'styled-components';
//import Bannerinde from 'common/assets/image/chakra.png';


export const DiscountWrapper = styled.div`
  text-align: left;
  margin-top : 60px;
  display : flex;
  font-size : 30px;
`;

export const Independancetitle = styled.div`
font-size: 60px;
font-weight: bold;
margin-top:10px;
padding:10px;
margin-right:15%;
z-index:-1;

`;
export const Independancecontent = styled.div`
font-size: 35px;
margin-top:10px;
margin-left:-10%;
padding:10px;
z-index:1;
background: -webkit-linear-gradient(#FFA500, #00FF00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  .quote-wrapper {
    width: 400px;
    height: 400px;
    margin-top: 230px;
  }
  .applycode{
    margin-left:30px;
  }


`;
export const ButtonWrapper = styled.div`
  position: relative;
  @media screen and (max-width: 991px) and (min-width: 767px) {
    display: flex;
    .reusecore__button {
      padding-left: 0;
      padding-right: 0;
      &.withoutBg {
        margin-left: 25px;
        &:hover {
          background: transparent !important;
          box-shadow: none !important;
        }
      }
    }
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    .reusecore__button {
      width: 100%;
      &.withoutBg {
        border: 0;
      }
    }
  }
`;


export const DiscountLabel = styled.div`
  font-family: 'Poppins', sans-serif;
  display: inline-block;
  border-radius: 4em;
  padding: 10px 24px 0 6px;
  box-shadow: 0px 7px 25px 0px rgba(22, 53, 76, 0.05);
  margin:50px;
  height: 45px;
  span{
    font-size:{
      30px;
    }
  }
  @media (max-width: 990px) {
    margin-top: 50px;
  }
  @media (max-width: 420px) {
    padding: 10px;
  }
  span {
    @media (max-width: 420px) {
      font-size: 12px;
    }
  }
  .discountAmount {
    padding: 9px 21px;
    border-radius: 28px;
    text-transform: uppercase;
    @media (max-width: 420px) {
      padding: 8px 16px;
      font-size: 10px;
    }
  }
`;

