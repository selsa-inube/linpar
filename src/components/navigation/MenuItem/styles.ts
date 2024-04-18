import styled from "styled-components";
import { Link } from "react-router-dom";
import { inube } from "@inube/design-system";

import { MenuItemSpacingType } from "./types";

interface IStyledMenuItemLink {
  spacing: MenuItemSpacingType;
  disabled: boolean;
}

const StyledMenuItemLink = styled(Link)<IStyledMenuItemLink>`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  align-items: center;
  height: ${(props) => (props.spacing === "wide" ? "40px" : "36px")};
  padding: ${(props) =>
    props.spacing === "wide"
      ? `${inube.spacing.s100} ${inube.spacing.s200}`
      : `${inube.spacing.s050} ${inube.spacing.s200}`};
  background-color: ${(props) =>
    props.disabled
      ? props.theme.color?.surface?.gray?.disabled ||
        inube.color.surface.gray.disabled
      : props.theme.color?.surface?.light?.clear ||
        inube.color.surface.light.clear};

  &:hover {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    background-color: ${({ theme }) =>
      theme.color?.surface?.gray?.hover || inube.color.surface.gray.hover};
  }
`;

export { StyledMenuItemLink };
