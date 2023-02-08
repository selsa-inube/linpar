import styled from "styled-components";

const StyledGreetingContainer = styled.div`
  margin: 40px auto 32px;
`;

const StyledIcon = styled.picture`
  & svg {
    width: 24px;
    height: 24px;
  }
`;

export { StyledGreetingContainer, StyledIcon };
