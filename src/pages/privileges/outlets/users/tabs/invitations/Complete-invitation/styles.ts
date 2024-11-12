import { inube } from "@inubekit/foundations";
import styled from "styled-components";

interface IStyledContainerAssisted {
  $cursorDisabled: boolean;
}

export const StyledContainerAssisted = styled.div<IStyledContainerAssisted>`
  & div > div:nth-child(3) button {
    cursor: ${({ $cursorDisabled }) =>
      $cursorDisabled ? "not-allowed" : "pointer"};
  }
  & div > div:nth-child(3) button div p,
  & div > div:nth-child(3) button div figure svg {
    color: ${({ $cursorDisabled }) =>
      $cursorDisabled ? inube.palette.neutral.N90 : inube.palette.blue.B400};
  }
`;

export const StyledContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 200px;

  @media (max-width: 560px) {
    width: 200px;
    height: auto;
    padding: 100px 100px;
  }

  @media (max-width: 1200px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 150px;
  }
`;
