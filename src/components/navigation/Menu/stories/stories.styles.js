import styled from "styled-components";

const StyledContainer = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
`;

const StyledStoryContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`;

const StyledHeaderContainer = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
`;

export { StyledStoryContainer, StyledContainer, StyledHeaderContainer };
