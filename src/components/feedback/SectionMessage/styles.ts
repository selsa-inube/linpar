import styled from "styled-components";
import { colors } from "@styles/colors";

interface IStyledSectionMessage {
  isMessageResponsive: boolean;
  appearance: string;
}

interface IStyledIcon {
  appearance: string;
}

const getBackgroundColor = ({ appearance }: IStyledSectionMessage) => {
  const actions: Record<string, string> = {
    primary: colors.ref.palette.blue.b50,
    confirm: colors.ref.palette.green.g50,
    warning: colors.ref.palette.yellow.y50,
    remove: colors.ref.palette.red.r50,
    help: colors.ref.palette.purple.p50,
  };
  return actions[appearance] || actions.primary;
};

const getIconColor = ({ appearance }: IStyledIcon) => {
  const actions: Record<string, string> = {
    primary: colors.sys.actions.primary.filled,
    confirm: colors.sys.actions.confirm.filled,
    warning: colors.sys.actions.warning.filled,
    remove: colors.sys.actions.remove.filled,
    help: colors.sys.actions.help.filled,
  };
  return actions[appearance] || actions.primary;
};

const StyledSectionMessage = styled.div<IStyledSectionMessage>`
  background-color: ${getBackgroundColor};
  width: ${(props) => (props.isMessageResponsive ? "auto" : "400px")};
  right: ${(props) => (props.isMessageResponsive ? "16px" : "64px")};
  bottom: ${(props) => (props.isMessageResponsive ? "16px" : "32px")};
  left: ${(props) => (props.isMessageResponsive ? "16px" : "auto")};
  height: auto;
  position: fixed;
  border-radius: 4px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  overflow: hidden;

  & > div:first-child {
    padding: 16px;
  }
`;

const StyledIcon = styled.div<IStyledIcon>`
  margin: auto 0px;
  display: flex;

  & svg {
    color: ${getIconColor};
    width: 24px;
    height: 24px;
  }
`;

export { StyledSectionMessage, StyledIcon };
