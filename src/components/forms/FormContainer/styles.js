import styled from "styled-components";

const StyledFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 32px;

  @media (max-width: 1111px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export { StyledFormContainer };
