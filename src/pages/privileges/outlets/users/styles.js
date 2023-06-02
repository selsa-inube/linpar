import styled from "styled-components";

const StyledContainer = styled.div`
  padding: ${(props) => (props.smallScreen ? "16px" : "32px 64px")};

  div > div:last-of-type > div:nth-of-type(2) {
    gap: 8px;
  }
`;

const StyledTextFieldContainer = styled.div`
  width: 280px;
`;

const StyledOptionsContainer = styled.div`
  height: 24px;
`;

export { StyledContainer, StyledTextFieldContainer, StyledOptionsContainer };
