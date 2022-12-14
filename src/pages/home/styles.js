import styled from "styled-components";

const StyledHome = styled.div`
  box-sizing: border-box;
  padding-bottom: 40px;
  height: 100vh;
  overflow-y: scroll;
`;

const StyledGreetingContainer = styled.div`
  max-width: 1400px;
  padding: 0 32px;
  margin: 40px auto 32px;

  svg {
    width: 24px;
    height: 24px;
  }
`;

const StyledAppsList = styled.ul`
  box-sizing: border-box;
  max-width: 1400px;
  list-style: none;
  margin: 40px auto;
  padding: 0px 32px;
  display: grid;
  grid-template-columns: repeat(5, 250px);
  justify-content: center;
  gap: 24px;

  @media screen and (max-width: 1420px) {
    grid-template-columns: repeat(4, 250px);
  }

  @media screen and (max-width: 1130px) {
    grid-template-columns: repeat(3, 250px);
  }

  @media screen and (max-width: 850px) {
    grid-template-columns: repeat(2, 250px);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 250px);
  }
`;

const StyledIcon = styled.img``;

export { StyledHome, StyledGreetingContainer, StyledAppsList, StyledIcon };
