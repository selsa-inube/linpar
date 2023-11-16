import { inube } from "@inube/design-system";
import styled from "styled-components";

interface IStyledModal {
  smallScreen: boolean;
}

const StyledModal = styled.div<IStyledModal>`
  background-color: ${inube.color.surface.light.clear};
  min-width: ${(props) => (props.smallScreen ? "300px" : "400px")};
  max-width: ${(props) => (props.smallScreen ? "328px" : "500px")};
  height: auto;
  border-radius: 8px;
  margin: 16px;
`;

export { StyledModal };
