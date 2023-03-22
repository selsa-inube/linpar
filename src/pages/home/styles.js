import styled from "styled-components";

const StyledHome = styled.div`
  box-sizing: border-box;
  padding-bottom: 40px;
  height: 100vh;
  overflow-y: scroll;
`;

const StyledPageTitle = styled.div`
  max-width: 1400px;
  padding: 32px 64px;

  @media screen and (max-width: 660px) {
    padding: 24px 32px 32px;
  }

  @media screen and (max-width: 590px) {
    padding: 24px 16px 32px;

    div {
      gap: 4px;
    }
  }
`;

const StyledAppsList = styled.ul`
  box-sizing: border-box;
  max-width: 1400px;
  list-style: none;
  margin: 0 auto;
  padding: 0px 64px;
  display: grid;
  grid-template-columns: repeat(5, 250px);
  justify-content: center;
  gap: 24px;

  @media screen and (max-width: 1480px) {
    grid-template-columns: repeat(4, 250px);
  }

  @media screen and (max-width: 1210px) {
    grid-template-columns: repeat(3, 250px);
  }

  @media screen and (max-width: 930px) {
    grid-template-columns: repeat(2, 250px);
  }

  @media screen and (max-width: 660px) {
    padding: 0px 32px;
  }

  @media screen and (max-width: 590px) {
    grid-template-columns: repeat(1, 100%);
    padding: 0px 16px;
  }
`;

export { StyledHome, StyledAppsList, StyledPageTitle };
