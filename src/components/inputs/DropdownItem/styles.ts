import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledDropdownItem {
  isDisabled: boolean;
  isFocused: boolean;
  isSelected: boolean;
}

const StyledDropdownItem = styled.li<IStyledDropdownItem>`
  display: flex;
  align-items: center;
  align-self: stretch;
  min-height: ${inube.spacing.s500};
  padding: ${inube.spacing.s050} ${inube.spacing.s200} ${inube.spacing.s050}
    ${inube.spacing.s150};
  cursor: ${({ isDisabled }) => (!isDisabled ? "pointer" : "not-allowed")};

  border-left: ${inube.spacing.s050} solid
    ${({ theme, isFocused }) =>
      isFocused
        ? theme.color?.stroke?.primary?.regular ||
          inube.color.stroke.primary.regular
        : "transparent"};

  p {
    color: ${({ theme, isDisabled, isFocused }) => {
      if (isDisabled) {
        return (
          theme.color?.text?.dark?.disabled || inube.color.text.dark.disabled
        );
      }
      if (isFocused) {
        return (
          theme.color?.text?.primary?.regular ||
          inube.color.text.primary.regular
        );
      }
      return theme.color?.text?.dark?.regular || inube.color.text.dark.regular;
    }};
  }

  &:hover {
    border-left: ${inube.spacing.s050} solid
      ${({ theme, isDisabled }) =>
        isDisabled
          ? "none"
          : theme.color?.stroke?.primary?.regular ||
            inube.color.stroke.primary.regular};

    background-color: ${({ theme }) =>
      theme.color?.surface?.gray?.hover || inube.color.surface.gray.hover};

    p {
      color: ${({ theme, isDisabled }) =>
        isDisabled
          ? theme.color?.text?.dark?.disabled || inube.color.text.dark.disabled
          : theme.color?.text?.primary?.regular ||
            inube.color.text.primary.regular};
    }
  }
`;

export { StyledDropdownItem };
