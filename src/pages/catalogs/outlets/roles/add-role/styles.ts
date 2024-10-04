import { inube } from "@inube/design-system";
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
  & div > div:nth-child(3) button div figure {
    color: ${({ $cursorDisabled }) =>
      $cursorDisabled
        ? inube.color.text.dark.disabled
        : inube.color.text.primary.regular};
  }
`;
