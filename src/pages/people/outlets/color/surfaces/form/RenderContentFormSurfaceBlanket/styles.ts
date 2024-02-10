import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledModal {
  theme?: typeof inube;
  isSmallScreen: boolean;
}

const StyledMessageContainer = styled.div`
  position: fixed;
  bottom: 18px;
  right: 75px;
  z-index: 2;
`;

const StyledBackdropBlanket = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 3;
`;

const StyledModal = styled.div<IStyledModal>`
  background-color: ${inube.color.surface.light.clear};
  height: auto;
  max-height: 132px;
  width: ${({ isSmallScreen }) => (isSmallScreen ? "312px" : "400px")};
  border-radius: ${({ theme }) => theme?.spacing?.s100 || inube.spacing.s100};
  margin: ${({ theme }) => theme?.spacing?.s200 || inube.spacing.s200};
  z-index: 1;
`;

export { StyledMessageContainer, StyledBackdropBlanket, StyledModal };
