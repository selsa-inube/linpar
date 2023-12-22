import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledRespondInvitation {
  smallScreen: boolean;
  theme?: typeof inube;
  type?: string;
}

const StyledModal = styled.div`
  background-color: ${({ theme }: IStyledRespondInvitation) =>
    theme?.color?.stroke?.light?.regular || inube.color.stroke.light.regular};
  min-width: ${({ smallScreen }: IStyledRespondInvitation) =>
    smallScreen ? "100%" : "450px"};
  min-height: ${({ smallScreen }: IStyledRespondInvitation) =>
    smallScreen ? "100vh" : "auto"};
  height: auto;
  border-radius: ${({ smallScreen }: IStyledRespondInvitation) =>
    smallScreen ? inube.spacing.s0 : inube.spacing.s100};

  & > div {
    padding: ${({ smallScreen }: IStyledRespondInvitation) =>
      smallScreen ? inube.spacing.s200 : inube.spacing.s300};
    ${({ type }) =>
      type !== "fields" &&
      `
      & > div > div > div > label  {
        margin: 0 0 ${inube.spacing.s250} 0;
      }
    `}
  }
`;

const StyledDivider = styled.div`
  border-radius: ${inube.spacing.s0};
  border: 1px dashed
    ${({ theme }: IStyledRespondInvitation) =>
      theme?.color?.stroke?.divider?.regular ||
      inube.color.stroke.divider.regular};
`;

export { StyledModal, StyledDivider };
