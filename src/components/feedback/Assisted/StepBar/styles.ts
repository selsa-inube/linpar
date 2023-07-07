import styled from "styled-components";
import { colors } from "@styles/colors";

interface IStyledStep {
  isPreviousStep?: boolean;
  isActualStep?: boolean;
  isFirstStep?: boolean;
}

interface IStyledLine extends IStyledStep {}

function getBackgroundColor(props: IStyledStep) {
  if (props.isPreviousStep || props.isActualStep) {
    return colors.sys.status.inProgress;
  }
  return colors.sys.actions.disabled.stroke;
}

function getLineColor(props: IStyledLine) {
  if (props.isPreviousStep || props.isActualStep) {
    return colors.sys.status.inProgress;
  }
  return colors.ref.palette.neutral.n40;
}

function getLineDisplay(props: IStyledLine) {
  if (props.isFirstStep) {
    return "none";
  }
  return "block";
}

const StyledStep = styled.div<IStyledStep>`
  background-color: ${getBackgroundColor};
  position: relative;
  min-width: 6px;
  height: 6px;
  border-radius: 50%;
  margin: 0 -3px;
`;

const StyledLine = styled.div<IStyledLine>`
  display: ${getLineDisplay};
  background-color: ${getLineColor};
  width: 100%;
`;

export { StyledStep, StyledLine };
