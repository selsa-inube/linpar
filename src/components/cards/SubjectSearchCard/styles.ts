import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledSubjectCard {
  isActive: boolean;
  smallScreen: boolean;
}

const StyledSubjectSearchCard = styled.div<IStyledSubjectCard>`
  width: 100%;
  height: ${({ smallScreen }) => (smallScreen ? "56px" : "auto")};
  box-sizing: border-box;
  border-radius: ${inube.spacing.s100};
  border: 1px solid
    ${({ theme }) =>
      theme?.color?.surface?.gray?.regular || inube.color.surface.gray.regular};
  cursor: pointer;
  background-color: ${({ theme, isActive }) =>
    isActive
      ? theme?.color?.surface?.gray?.regular || inube.color.surface.gray.regular
      : theme?.color?.surface?.light?.clear || inube.color.surface.light.clear};

  box-shadow: ${({ theme }) =>
    `0px 1px 3px 1px ${
      theme?.color?.palette?.neutralAlpha?.N40A ||
      inube.color.palette.neutralAlpha.N40A
    }, 0px 1px 2px 0px ${
      theme?.color?.palette?.neutralAlpha?.N60A ||
      inube.color.palette.neutralAlpha.N60A
    }`};
`;

export { StyledSubjectSearchCard };
