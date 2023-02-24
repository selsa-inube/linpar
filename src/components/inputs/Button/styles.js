import styled from "styled-components";

import { colors } from "../../../styles/colors";

const getBackgroundColor = ({ appearance }) => {
  const actions = {
    primary: colors.sys.actions.primary,
    secondary: colors.sys.actions.secondary,
    confirm: colors.sys.actions.confirm,
    warning: colors.sys.actions.warning,
    help: colors.sys.actions.help,
  };
  return actions[appearance] || colors.sys.actions.primary;
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
    background-color: ${colors.sys.actions.secondary};
    border: none;
    color: ${colors.sys.text.disabled};
    cursor: not-allowed;
  }
`;

export { StyledButton };
