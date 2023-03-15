import styled from "styled-components";

const StyledPageUsers = styled.div`
  padding: 32px 64px;
  @media (max-width: 1111px) {
    height: 120vh;
  }

  @media (max-width: 565px) {
    padding: 16px;
  }
`;

const StyledFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 1111px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledSpinner = styled.div`
  & div {
    margin: 0px 22.5px;
    height: 12px;
    width: 12px;
    border-left-color: transparent;
  }
`;

const StyledMessage = styled.div`
  @media (max-width: 565px) {
    & div {
      width: auto;
      right: 16px;
      left: 16px;
      padding: 0px 5px;
      justify-content: space-between;
    }

    & svg:last-of-type {
      margin-left: 20px;
    }

    & p:last-child {
      display: none;
    }
  }
`;

export { StyledPageUsers, StyledFormContainer, StyledSpinner, StyledMessage };
