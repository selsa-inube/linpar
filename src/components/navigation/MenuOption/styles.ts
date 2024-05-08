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
    theme?.color?.stroke?.light?.clear || inube.color.stroke.light.clear};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) =>
      theme?.color?.stroke?.gray?.regular || inube.color.stroke.gray.regular};
  }
`;

export { StyledOption };
