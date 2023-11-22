import { inube } from "@inube/design-system";
import styled from "styled-components";

interface IStyledModal {
  smallScreen: boolean;
  theme?: typeof inube;
}

const StyledModal = styled.div<IStyledModal>`
  background-color: ${inube.color.surface.light.clear};
  min-width: ${(props) => (props.smallScreen ? "300px" : "400px")};
  max-width: ${(props) => (props.smallScreen ? "328px" : "500px")};
  height: auto;
  border-radius: ${({ theme }) => theme?.spacing?.s100 || inube.spacing.s100};
  margin: ${({ theme }) => theme?.spacing?.s200 || inube.spacing.s200};
`;

export { StyledModal };
