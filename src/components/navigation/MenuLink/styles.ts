import { Link } from "react-router-dom";
import styled from "styled-components";
import { inube } from "@inube/design-system";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) =>
    theme?.color?.surface?.gray?.regular || inube.color.surface.gray.regular};
  display: inline-block;
  padding: ${inube.spacing.s075} ${inube.spacing.s150};
  border: none;
  background-color: ${({ theme }) =>
    theme?.color?.stroke?.light?.clear || inube.color.stroke.light.clear};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) =>
      theme?.color?.surface?.gray?.regular || inube.color.surface.gray.regular};
  }
`;

export { StyledLink };
