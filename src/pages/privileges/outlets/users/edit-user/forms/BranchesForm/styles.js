import styled from "styled-components";

const StyledHeadContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 16px;
  align-items: center;
`;

const StyledBranchesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 344px;
  overflow-y: scroll;
  margin-top: 32px;
`;

const StyledSubmitContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 10px;
`;

export { StyledBranchesContainer, StyledHeadContainer, StyledSubmitContainer };
