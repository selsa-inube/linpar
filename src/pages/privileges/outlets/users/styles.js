import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 32px 64px;
`;

const StyledInputsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div:first-of-type {
    width: 280px;
  }
`;

export { StyledContainer, StyledInputsContainer };
