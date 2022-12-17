import styled, { keyframes } from "styled-components";

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const StyledCircularProgress = styled.div`
  position: relative;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: darkslategray;
  border-radius: 50%;
  width: 32px;
  height: 32px;

  animation: ${spin} 1s linear infinite;
`;

export { StyledCircularProgress };
