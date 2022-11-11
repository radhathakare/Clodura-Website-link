import styled from 'styled-components';

const PicturesWrapper = styled.section`
  > h1 {
      margin: 0;
      margin-left: 60px;
      font-size: 36px;
  }

  > .images-first-row {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;

      > div {
          width: 23%;
      }
  }

  > .images-second-row {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;

      > div {
          width: 23%;
      }

      > .second-first {
          width: 10%;
      }

      > .second-last {
          width: 5%;
      }
  }
`;

export default PicturesWrapper;