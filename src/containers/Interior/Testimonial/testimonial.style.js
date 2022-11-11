import styled from "styled-components";

const TestimonialsWrapper = styled.div`
    width: 650px;
    border-radius: 30px;
    padding : 55px 60px 60px 40px;
    box-shadow: 0 0 10px 0 lightgray;
    position: relative;
    margin: 20px;
    

    @media only screen and (max-width: 1440px) {
      padding: 70px 60px;
    }
    @media only screen and (max-width: 1200px) {
      width: calc(100% - 450px);
      padding: 56px 50px;
    }
    @media only screen and (max-width: 991px) {
      width: 100%;
    }
    @media only screen and (max-width: 667px) {
      margin-right: 0;
      padding: 0;
      box-shadow: none;
    }

    @media only screen and (max-width: 560px) {
        flex-direction: column;
    }

    .formcontent{
      display : flex;
    }
`

export const TestimonialsWrapper2 = styled.div`
width: 350px;
    border-radius: 30px;
    padding : 20px;
    box-shadow: 0 0 10px 0 lightgray;
    position: relative;
    margin: 15px;
    

    @media only screen and (max-width: 1440px) {
      padding: 70px 60px;
    }
    @media only screen and (max-width: 1200px) {
      width: calc(100% - 450px);
      padding: 56px 50px;
    }
    @media only screen and (max-width: 991px) {
      width: 100%;
    }
    @media only screen and (max-width: 667px) {
      margin-right: 0;
      padding: 0;
      box-shadow: none;
    }

    @media only screen and (max-width: 560px) {
        flex-direction: column;
    }
  
  
`;

export default TestimonialsWrapper;

