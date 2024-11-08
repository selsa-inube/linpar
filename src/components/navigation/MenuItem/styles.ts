import styled from "styled-components";
import { Link } from "react-router-dom";

import { MenuItemSpacingType } from "./types";
import { inube } from "@inubekit/foundations";

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
  padding: ${(props) => (props.spacing === "wide" ? "8px 16px" : "4px 16px")};
  background-color: ${({ theme, disabled }) =>
    disabled
      ? theme.palette?.neutral?.N90 || inube.palette.neutral.N90
      : theme.color?.surface?.light?.clear || inube.palette.neutral.N0};

  &:hover {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    background-color: ${({ theme }) =>
      theme.color?.surface?.gray?.hover || inube.palette.neutral.N100};
  }
`;

export { StyledMenuItemLink };
