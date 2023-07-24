import styled from "styled-components";
import { colors } from "@styles/colors";
const StyledDesktopContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  gap: 8px;
  justify-items: center;
  background-color: ${colors.ref.palette.neutral.n20};
`;

const StyledMobile = styled.div`
  display: flex;
  gap: 16px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  padding: 12px;
  background-color: ${colors.ref.palette.neutral.n20};
`;
const StyledStepsContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 700px;
  justify-content: center;
`;

const StyledSteps = styled.ul`
  display: flex;
  width: 90%;
  margin: 0px;
  padding: 0px;
  justify-content: center;
`;

const StyledStepsMobile = styled.div`
  display: flex;
  width: 90%;
  align-items: start;
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

export {
  StyledButton,
  StyledSteps,
  StyledStepsMobile,
  StyledStepsMobileId,
  StyledMobile,
  StyledDesktopContainer,
  StyledStepsContent,
};
