import styled from "styled-components";

const StyledAppMenu = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 32px 64px 32px;
`;

const StyledTitle = styled.div`
  margin: 32px 0px;
`;

const StyledCards = styled.ul`
  max-width: 1400px;
  list-style: none;
  margin: 48px auto;
  display: grid;
  grid-template-columns: repeat(4, 250px);
  justify-content: center;
  gap: 24px;

  @media screen and (max-width: 1420px) {
    grid-template-columns: repeat(4, 250px);
  }

  @media screen and (max-width: 1360px) {
    grid-template-columns: repeat(3, 250px);
  }

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 250px);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 250px);
  }
`;

export { StyledAppMenu, StyledCards, StyledTitle };
