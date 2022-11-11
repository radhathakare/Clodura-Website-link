import styled from "styled-components";
import { themeGet } from '@styled-system/theme-get';

const FormWrapper = styled.section`
    margin-top: -60px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: 20px;
        margin-top: 40px;
    }
    .slide__wrapper {
        width: calc(100% - 500px);
        border-radius: 30px;
        padding: 85px 90px 90px 70px;
        background-color: ${themeGet('colors.white', '#ffffff')};
        box-shadow: 1px 2px 80px rgba(244, 244, 253, 0.83);
        position: relative;
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
      }
    
`;




export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    
`;

export const FormGroupItem = styled.div`
    display: flex;

    input {
        border: 1px solid #C396C2;
    }
    div {
        margin-right: 6px;
        margin-bottom: 6px;
    }
    
`;

export default FormWrapper;