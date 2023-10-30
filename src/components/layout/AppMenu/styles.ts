import styled from "styled-components";

const StyledAppMenu = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 32px 64px;

  @media (max-width: 490px) {
    padding: 16px;
  }
`;

const StyledTitle = styled.div`
  margin: 32px 0;
`;

export { StyledAppMenu, StyledTitle };
