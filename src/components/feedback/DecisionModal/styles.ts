import styled from "styled-components";
import { inube } from "@inubekit/foundations";

interface IStyledModal {
  $smallScreen: boolean;
}

const StyledModal = styled.div<IStyledModal>`
  background-color: ${inube.palette.neutral.N0};
  min-width: ${(props) => (props.$smallScreen ? "300px" : "400px")};
  max-width: ${(props) => (props.$smallScreen ? "328px" : "500px")};
  height: auto;
  border-radius: 8px;
  margin: 16px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
`;

export { StyledModal };
