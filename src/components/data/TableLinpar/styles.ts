import styled from "styled-components";
import { inube } from "@inubekit/foundations";

interface IStyledContainer {
  $multipleTables?: boolean;
  $pageLength?: number;
  $entriesLength?: number;
}

const StyledContainerTable = styled.div<IStyledContainer>`
  position: relative;
  border-radius: 8px;
  border: ${({ $pageLength, $entriesLength }) =>
    $pageLength &&
    $entriesLength &&
    $entriesLength > $pageLength &&
    `1px solid ${inube.palette.neutral.N40}`};

  & > td,
  div {
    justify-content: center;
  }

  & .truncate-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (max-width: 1200px) {
    & > td,
    div {
      justify-content: flex-start;
    }
  }
`;

export { StyledContainerTable };
