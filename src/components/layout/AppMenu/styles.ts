import styled from "styled-components";

const StyledAppMenu = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 32px 64px;
  @media (max-width: 490px) {
    padding: 16px;
  }
`;

const StyledTitle = styled.div`
  margin: 32px 0;
`;

const StyledCards = styled.ul`
  max-width: 1400px;
  list-style: none;
  margin: 48px auto;
  display: grid;
  grid-template-columns: repeat(6, auto);
  gap: 24px;
  padding: 0;

  @media screen and (max-width: 1580px) {
    grid-template-columns: repeat(5, auto);
  }

  @media screen and (max-width: 1375px) {
    grid-template-columns: repeat(4, auto);
  }

  @media screen and (max-width: 1170px) {
    grid-template-columns: repeat(3, auto);
  }

  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(2, auto);
  }

  @media screen and (max-width: 850px) {
    grid-template-columns: repeat(3, auto);
  }

  @media screen and (max-width: 710px) {
    grid-template-columns: repeat(2, auto);
  }

  @media screen and (max-width: 490px) {
    grid-template-columns: repeat(1, 100%);
  }
`;

export { StyledAppMenu, StyledCards, StyledTitle };
