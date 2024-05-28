import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledModal {
  $smallScreen: boolean;
}

const StyledBackdropBlanket = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 1;
`;

const StyledModal = styled.div<IStyledModal>`
  background-color: ${inube.color.surface.light.clear};
  height: 100%;
  max-height: 180px;
  width: ${({ $smallScreen }) => ($smallScreen ? "312px" : "400px")};
  border-radius: ${({ theme }) => theme?.spacing?.s100 || inube.spacing.s100};
  margin: ${({ theme }) => theme?.spacing?.s200 || inube.spacing.s200};
  z-index: 3;
`;

export { StyledBackdropBlanket, StyledModal };
