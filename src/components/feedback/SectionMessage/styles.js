import styled from "styled-components";
import { colors } from "../../../styles/colors";

const getBackgroundColor = ({ aspect }) => {
  const actions = {
    primary: colors.ref.palette.blue.b50,
    confirm: colors.ref.palette.green.g50,
    warning: colors.ref.palette.yellow.y50,
    remove: colors.ref.palette.red.r50,
  };
  return actions[aspect] || colors.ref.palette.neutral.n50;
};

const StyledContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  right: 64px;
  bottom: 32px;
  height: auto;
  width: 400px;
  border-radius: 4px;
  background-color: ${getBackgroundColor};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 2px 6px 2px rgba(0, 0, 0, 0.15);
`;

const StyledIcon = styled.figure`
  width: 56px;
  margin: 0;
  display: flex;
  justify-content: center;

  svg {
    width: 24px;
    height: auto;
    color: ${({ aspect }) => colors.sys.actions[aspect].filled};
  }
`;

const StyledText = styled.div`
  margin: 16px 0;
`;

const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  svg {
    width: 16px;
    height: 16px;
  }
`;

export { StyledContainer, StyledIcon, StyledText, StyledTitle };
