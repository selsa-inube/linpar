import styled from "styled-components";
import { inube } from "@inubekit/foundations";
interface IStyledAssistedContainer {
  $cursorDisabled: boolean;
}

const StyledAssistedContainer = styled.div<IStyledAssistedContainer>`
  border-radius: 8px;
  padding: 16px;
  background-color: ${({ theme }) =>
    theme?.palette?.neutral?.N10 || inube.palette.neutral.N10};
  & div > div:nth-child(3) button div p,
  & div > div:nth-child(3) button div figure svg {
    cursor: ${({ $cursorDisabled }) =>
      $cursorDisabled ? "not-allowed" : "pointer"};
    color: ${({ $cursorDisabled }) =>
      $cursorDisabled ? inube.palette.neutral.N90 : inube.palette.blue.B400};
  }
`;

export { StyledAssistedContainer };
