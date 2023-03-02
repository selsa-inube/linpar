import styled from "styled-components";

import { colors } from "../../../styles/colors";

const getBackgroundColor = ({ appearance }) => {
  const actions = {
    primary: colors.sys.actions.primary.filled,
    secondary: colors.sys.actions.secondary.filled,
    confirm: colors.sys.actions.confirm.filled,
    warning: colors.sys.actions.warning.filled,
    help: colors.sys.actions.help.filled,
  };
  return actions[appearance] || colors.sys.actions.primary.filled;
};

const StyledButton = styled.button`
  max-width: fit-content;
  display: flex;
  align-items: center;
  padding: ${({ spacing }) =>
    spacing === "compact" ? `4px 12px` : `8px 16px`};
  color: ${({ appearance }) =>
    appearance === "warning" || appearance === "secondary"
      ? colors.sys.text.dark
      : colors.sys.text.light};
  background-color: ${getBackgroundColor};
  border: none;
  border-radius: 8px;
  gap: 8px;
  cursor: pointer;

  &:disabled {
    background-color: ${colors.sys.actions.secondary.filled};
    border: none;
    color: ${colors.sys.text.disabled};
    cursor: not-allowed;
  }
`;

export { StyledButton };
