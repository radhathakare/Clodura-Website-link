import styled from 'styled-components';

const AdvertisementWrapper = styled.section`
   text-align: center;
   max-width: 70%;
   margin: 60px auto;
   padding: 0;
   
   @media screen and (max-width: 425px) {
       max-width: 90%;
   }

   > h1 {
       font-size: 30px;
       line-height: 1;
   }
   
   > .orange {
       color: #F69954;
   }

   > p {
       color: black;
   }
`;

export const AdvertisementMain = styled.div`
   padding: 60px;
   display: flex;

   .advertisement-image-box {
       flex: 0.5;
       margin-top: auto;
       margin-bottom: auto;
   }

   @media screen and (max-width: 800px) {
       flex-direction: column;

       .advertisement-image-box {
            margin-top: 20px;
        }
    }

    @media screen and (max-width: 650px) {
       padding: 30px;
   }
    @media screen and (max-width: 425px) {
       padding: 10px;
   }
`;

export const AdvertisementBoxContainer = styled.div`
    flex: 0.5;
    display: flex;
    flex-direction: column;
`;

export const AdvertisementBoxRow = styled.div`
    display: flex;
`;

export const AdvertisementBox = styled.div`
    display: flex;
    align-items: flex-end;
    border: 1.5px solid orange;
    height: 180px;
    width: 225px;
    padding: 20px;

    > p {
        width: 75%;
        text-align: left;
    }

    @media screen and (max-width: 1000px) {
        height: 150px;
        width: 175px;
        font-size: 14px;
    }

    @media screen and (max-width: 500px) {
        height: 125px;
        width: 150px;
        font-size: 12px;
    }
`;

export default AdvertisementWrapper;
