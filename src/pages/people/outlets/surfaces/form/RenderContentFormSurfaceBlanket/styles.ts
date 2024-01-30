import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledModal {
  theme?: typeof inube;
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
`;

const StyledModal = styled.div<IStyledModal>`
  background-color: ${inube.color.surface.light.clear};
  min-width: 312px;
  max-width: 400px;
  max-height: 132px;
  height: auto;
  border-radius: ${({ theme }) => theme?.spacing?.s100 || inube.spacing.s100};
  margin: ${({ theme }) => theme?.spacing?.s200 || inube.spacing.s200};
  z-index: 1;
`;

export { StyledMessageContainer, StyledBackdropBlanket, StyledModal };
