import styled from "styled-components";
import { inube } from "@inube/design-system";

const StyledOption = styled.button`
  color: ${({ theme }) =>
    theme?.color?.surface?.gray?.regular || inube.color.surface.gray.regular};
  padding: ${({ theme }) =>
    `${theme?.spacing?.s075} ${theme?.spacing?.s150}` ||
    `${inube.spacing.s075} ${inube.spacing.s150}`};
  border: none;
  background-color: ${({ theme }) =>
    theme?.color?.stroke?.light?.clear || inube.color.stroke.light.hover};
  cursor: pointer;
  &:hover {
    border-left: 2px solid
      ${({ theme }) =>
        theme?.color?.stroke?.primary?.regular ||
        inube.color.stroke.primary.regular};
    background-color: ${({ theme }) =>
      theme?.color?.stroke?.gray?.hover || inube.color.stroke.light.regular};
  }
`;

export { StyledOption };
