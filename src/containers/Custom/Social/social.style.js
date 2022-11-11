import styled from 'styled-components';

export const SocialWrapper = styled.section`
position : fixed;
  
  
.Iconbar{
     position: fixed; 
     top:50%;
    
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.Iconbar a{
  display: block;
  text-align: center;
  padding: 3px;
  transition: all 0.3s ease;
  color: #03BAED;
  font-size: 40px;
  
}

@media only screen and (max-width: 560px) {
    .Iconbar a {
        font-size:30px;
    }
  }
  @media only screen and (max-width: 440px) {
    .Iconbar a {
        font-size:20px;
    }
  }
`;
