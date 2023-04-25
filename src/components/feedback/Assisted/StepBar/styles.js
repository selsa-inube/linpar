import styled from "styled-components";
import { colors } from "../../../../styles/colors";

function getBackgroundColor(props) {
  if (props.isActive || props.isActualStep) {
    return colors.sys.status.inProgress;
  }
  return colors.sys.actions.disabled.stroke;
}

function getLineDisplay(props) {
  if (props.isFirstStep) {
    return "none";
  }
  return "block";
}

function getLineColor(props) {
  if (props.isActive || props.isActualStep) {
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

const StyledLine = styled.div`
  display: ${getLineDisplay};
  background-color: ${getLineColor};
  width: 100%;
`;

export { StyledStep, StyledLine };
