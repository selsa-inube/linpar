import { colors } from "@src/styles/colors";
import styled from "styled-components";
import { inube } from "@inube/design-system";
import { InteractiveModalProps } from "./types";

interface IStyledRespondInvitation {
  smallScreen: boolean;
  theme?: typeof inube;
}

const StyledModal = styled.div`
  background-color: ${colors.ref.palette.neutral.n10};
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
