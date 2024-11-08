import { inube } from "@inubekit/foundations";
import styled from "styled-components";

const StyledOption = styled.button`
  color: ${({ theme }) =>
    theme?.palette?.neutral?.N300 || inube.palette.neutral.N300};
  padding: "6px 12px";
  border: none;
  background-color: ${({ theme }) =>
    theme?.palette?.neutral?.N0 || inube.palette.neutral.N0};
  cursor: pointer;
  &:hover {
    border-left: 2px solid
      ${({ theme }) => theme?.palette?.blue?.B400 || inube.palette.blue.B400};
    background-color: ${({ theme }) =>
      theme?.palette?.neutral?.N10 || inube.palette.neutral.N10};
  }
`;

export { StyledOption };
