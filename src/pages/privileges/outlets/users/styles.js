import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 32px 64px;

  div > div:last-of-type > div:nth-of-type(2) {
    gap: 8px;
  }

  @media screen and (max-width: 580px) {
    padding: 16px;
  }
`;

const StyledTextFieldContainer = styled.div`
  width: 280px;
`;

export { StyledContainer, StyledTextFieldContainer };
