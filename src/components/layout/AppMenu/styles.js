import styled from "styled-components";

const StyledAppMenu = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

const StyledBreadcrumbs = styled.div`
  padding: 32px 65px;
`;

const StyledTitle = styled.div`
  padding: 0 65px;
  & div {
    margin: 0;
  }
`;

const StyledCards = styled.ul`
  box-sizing: border-box;
  max-width: 1400px;
  list-style: none;
  margin: 48px auto;
  padding: 0px 32px;
  display: grid;
  grid-template-columns: repeat(5, 220px);
  gap: 20px;
`;

export { StyledAppMenu, StyledCards, StyledTitle, StyledBreadcrumbs };
