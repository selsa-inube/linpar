import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledRespondInvitation {
  smallScreen: boolean;
  theme?: typeof inube;
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
      smallScreen ? inube.spacing.s300 : inube.spacing.s400};
  }
`;

export { StyledModal };
