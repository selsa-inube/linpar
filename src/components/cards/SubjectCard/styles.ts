import { colors } from "@styles/colors";
import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledSubjectCard {
  isActive: boolean;
  smallScreen: boolean;
  theme?: typeof inube;
}

const StyledSubjectCard = styled.div<IStyledSubjectCard>`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  gap: ${inube.spacing.s100};
  border-radius: ${inube.spacing.s100};
  border: 1px solid
    ${({ theme }: IStyledSubjectCard) =>
      theme?.color?.surface?.gray?.regular || inube.color.surface.gray.regular};
  cursor: pointer;
  padding: ${({ smallScreen }: IStyledSubjectCard) =>
    smallScreen
      ? inube.spacing.s300
      : `${inube.spacing.s100} ${inube.spacing.s200}`};
  width: ${(props) => (props.smallScreen ? "56px" : "260px")};
  background-color: ${({ theme, isActive }: IStyledSubjectCard) =>
    isActive
      ? theme?.color?.surface?.gray?.regular || inube.color.surface.gray.regular
      : theme?.color?.surface?.light?.clear || inube.color.surface.light.clear};
  box-shadow: ${({ isActive }: IStyledSubjectCard) =>
    isActive ? "none" : "0px 1px 2px " + inube.color.surface.gray.regular};

  & div:first-child {
    display: ${(props) => (props.smallScreen ? "none" : "block")};
  }
`;

export { StyledSubjectCard };
