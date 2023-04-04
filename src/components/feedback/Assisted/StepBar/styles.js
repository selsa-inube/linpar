import styled from "styled-components";
import { colors } from "../../../../styles/colors";

function getBackgroundColor(props) {
  if (props.isActive || props.stepActual) {
    return colors.sys.status.inProgress;
  }
  return colors.sys.actions.disabled.stroke;
}

function getLeftLineDisplay(props) {
  if (props.isFirstStep) {
    return "none";
  }
  return "block";
}

function getLeftLineColor(props) {
  if (props.isActive || props.stepActual) {
    return colors.sys.status.inProgress;
  }
  return colors.ref.palette.neutral.n40;
}

function getRightLineDisplay(props) {
  if (props.isLastStep) {
    return "none";
  }
  return "block";
}

function getRightLineColor(props) {
  if (props.isActive) {
    return colors.sys.status.inProgress;
  }
  return colors.ref.palette.neutral.n40;
}

const StyledStep = styled.div`
  background-color: ${getBackgroundColor};
  position: relative;
  min-width: 6px;
  height: 6px;
  border-radius: 50%;
  margin: 0 -3px;
`;

const StyledLeftLine = styled.div`
  display: ${getLeftLineDisplay};
  background-color: ${getLeftLineColor};
  width: calc(50% - 3px);
`;

const StyledRightLine = styled.div`
  display: ${getRightLineDisplay};
  background-color: ${getRightLineColor};
  width: calc(50% - 3px);
`;

export { StyledStep, StyledLeftLine, StyledRightLine };
