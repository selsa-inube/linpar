import styled from "styled-components";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 53px 1fr;
`;

const StyledStoryContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`;

export { StyledStoryContainer, StyledContainer };
