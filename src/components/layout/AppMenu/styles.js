import styled from "styled-components";

const StyledAppMenu = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 32px 64px 32px;
`;

const StyledTitle = styled.div`
  & div {
    margin: 0;
  }
`;

const StyledCards = styled.ul`
  max-width: 1400px;
  list-style: none;
  margin: 48px auto;
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

export { StyledAppMenu, StyledCards, StyledTitle };
