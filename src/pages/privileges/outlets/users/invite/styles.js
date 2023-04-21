import styled from "styled-components";

const StyledPageUsers = styled.div`
  padding: 32px 64px;

  @media (max-width: 565px) {
    padding: 16px 16px 100px 16px;
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

export { StyledPageUsers, StyledFormContainer };
