import styled from "styled-components";
import { colors } from "../../../styles/colors";

//styled-components while width on stack works correctly in design system

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

const StyledAssisted = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  & button {
    min-width: ${(props) => props.isAssistedResponsive && "auto"};
  }
`;

const StyledStepsMobileId = styled.div`
  display: flex;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-style: solid;
  border-color: ${colors.sys.status.inProgress};
  border-radius: 50%;
`;

export { StyledSteps, StyledAssisted, StyledStepsMobile, StyledStepsMobileId };
