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
    smallScreen ? "0" : "8px"};

  & > div {
    padding: ${({ smallScreen }: IStyledRespondInvitation) =>
      smallScreen ? "24px" : "32px"};
  }
`;

export { StyledModal };
