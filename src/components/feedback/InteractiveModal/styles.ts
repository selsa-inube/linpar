import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledRespondInvitation {
  $smallScreen: boolean;
  type?: string;
}

const StyledModal = styled.div<IStyledRespondInvitation>`
  background-color: ${({ theme }) =>
    theme?.color?.stroke?.light?.regular || inube.color.stroke.light.regular};
  min-width: ${({ $smallScreen }) => ($smallScreen ? "100%" : "450px")};
  min-height: ${({ $smallScreen }) => ($smallScreen ? "100vh" : "auto")};
  height: auto;
  border-radius: ${({ $smallScreen }) =>
    $smallScreen ? inube.spacing.s0 : inube.spacing.s100};

  & > div {
    padding: ${({ $smallScreen }) =>
      $smallScreen ? inube.spacing.s200 : inube.spacing.s300};
    ${({ type }) =>
      type !== "fields" &&
      `
      & > div > div > div > label  {
        margin: 0 0 ${inube.spacing.s250} 0;
      }
    `}
  }
`;

const StyledDivider = styled.div<IStyledRespondInvitation>`
  border-radius: ${inube.spacing.s0};
  border: 1px dashed
    ${({ theme }) =>
      theme?.color?.stroke?.divider?.regular ||
      inube.color.stroke.divider.regular};
`;

export { StyledModal, StyledDivider };
