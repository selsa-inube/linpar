import styled from "styled-components";
import { inube } from "@inubekit/foundations";

interface IStyledRespondInvitation {
  $smallScreen: boolean;
  type?: string;
}

const StyledModal = styled.div<IStyledRespondInvitation>`
  background-color: ${({ theme }) =>
    theme?.color?.stroke?.light?.regular || inube.palette.neutral.N10};
  min-width: ${({ $smallScreen }) => ($smallScreen ? "100%" : "450px")};
  min-height: ${({ $smallScreen }) => ($smallScreen ? "100vh" : "auto")};
  height: auto;
  border-radius: ${({ $smallScreen }) => ($smallScreen ? "0" : "8px")};

  & > div {
    padding: ${({ $smallScreen }) => ($smallScreen ? "16px" : "24px")};
    ${({ type }) =>
      type !== "fields" &&
      `
      & > div > div > div > label  {
        margin: 0 0 ${"20px"} 0;
      }
    `}
  }
`;

export { StyledModal };
