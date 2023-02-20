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
  width: 100%;
  list-style: none;
  margin: 48px 0px;
  padding: 0px 65px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  & div {
    margin: auto;
  }
`;

export { StyledAppMenu, StyledCards, StyledTitle, StyledBreadcrumbs };
