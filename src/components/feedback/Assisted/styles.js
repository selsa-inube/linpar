import styled from "styled-components";
import { colors } from "@styles/colors";

const StyledSteps = styled.ul`
  display: flex;
  width: 100%;
  margin: 0px;
  padding: 0px;
`;

const StyledStepsMobile = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 8px;
`;

const StyledButton = styled.div`
  & button {
    min-width: auto;
    padding: 0px;
  }
`;

const StyledStepsMobileId = styled.div`
  display: flex;
  justify-content: center;
  min-width: 16px;
  height: 16px;
  border-style: solid;
  border-color: ${colors.sys.status.inProgress};
  border-radius: 50%;
`;

export { StyledButton, StyledSteps, StyledStepsMobile, StyledStepsMobileId };
