import styled from "styled-components";

const StyledAppMenu = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

const StyledBreadcrumbs = styled.div`
  margin: 15px 0 auto;
  padding: 0 32px;
`;

const StyledTitle = styled.div`
  max-width: 1400px;
  padding: 0 32px;
`;

const StyledCards = styled.div`
  box-sizing: border-box;
  max-width: 1400px;
  list-style: none;
  margin: 20px auto;
  padding: 0px 32px;
  display: grid;
  grid-template-columns: repeat(5, 220px);
  justify-content: center;
  gap: 20px;
`;

export { StyledAppMenu, StyledCards, StyledTitle, StyledBreadcrumbs };
