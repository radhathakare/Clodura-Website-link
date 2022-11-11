import styled from 'styled-components';

const TrustedWrapper = styled.section`
font-family: 'Poppins', serif;
.Faqheading{
  position: relative;
  margin-bottom: 45px;
  display: inline-block;
  font-weight: 600;
  line-height: 1
  align-text : center;
  margin-left:45%;
}
.Faqheading::before {
    content: "";
    position: absolute;
    left: 50%;
    width: 60px;
    height: 2px;
    background: #03BAED;
    bottom: -25px;
    margin-left: -30px;
}
.boxcard{
  background: #FFFFFF;
  box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.06);
  border-radius: 4px;

}
.question{
    font-size: 20px;
}
.boxcard  :hover{
    background: rgba(89, 171, 227, 0.1);
    padding-left: 10px;

}
.boxcard{
padding: 10px;
  border: none;
  background: none;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.boxcard .accordion_body{
    padding: 30px;
  padding-left: 35px;
  padding-bottom: 16px;
  font-weight: 400;
  font-size: 16px;
  color: #6F8BA4;
  line-height: 28px;
  letter-spacing: 1px;
  border-top: 1px solid #F3F8FF;
}
`;


export { TrustedWrapper };
