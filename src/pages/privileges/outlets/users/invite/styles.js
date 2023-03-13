import styled from "styled-components";

const StyledPageUsers = styled.div`
  padding: 32px 64px;
`;

const StyledFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;

const StyledSpinner = styled.div`
  & div {
    margin: 0px 22.5px;
    height: 12px;
    width: 12px;
    border-left-color: transparent;
  }
`;

export { StyledPageUsers, StyledFormContainer, StyledSpinner };
