import styled from 'styled-components';

const CounterArea = styled.section`
  text-align: center;
  padding-top: 100px;
  .Container {
    max-width: 1000px;
  }
  .topTitle {
    max-width: 1000px;
    @media (max-width: 991px) {
      width: 100%;
      margin-bottom: 50px;
    }
    
    p {
      font-weight: normal;
      font-size: 17px;
      line-height: 2.06;
      letter-spacing: 0.1px;
      color: #0f2137;
      max-width: 750px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 0;
      @media (max-width: 1600px) {
        font-size: 15px;
      }
    }
  }
  .CounterBox {
    h3 {
      font-weight: normal;
      font-size: 60px;
      line-height: 1;
      text-align: center;
      letter-spacing: -0.02em;
      color: #1089ff;
      margin-bottom: 0;
      &::before {
        content: '+';
        font-size: 40px;
        display: inline-block;
        vertical-align: top;
        position: relative;
        top: -10px;
        margin-right: 7px;
      }
    }
    p {
      font-weight: normal;
      font-size: 17px;
      text-align: center;
      color: #09131f;
      margin-top: 15px;
      margin-bottom: 10px;
    }
  }
  .counterLink {
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #1089ff;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
`;
export const Col = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  flex: 0 0 33.333%;
  max-width: 33.333%;
  @media (max-width: 575px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 25px;
  }
`;

export default CounterArea;
