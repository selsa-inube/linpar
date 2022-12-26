import styled, { keyframes } from "styled-components";

import { colors } from "../../../styles/colors";

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const StyledCircularProgress = styled.div`
  position: relative;
  border: 4px solid ${colors.sys.actions.secondary};
  border-left-color: ${colors.sys.actions.primary};
  border-radius: 50%;
  width: 32px;
  height: 32px;

  animation: ${spin} 1s linear infinite;
`;

export { StyledCircularProgress };
