import styled from "styled-components";

const StyledMessageContainer = styled.div`
  position: fixed;
  bottom: 18px;
  right: 75px;
  z-index: 2;
`;

const StyledBackdropNav = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

export { StyledMessageContainer, StyledBackdropNav };
