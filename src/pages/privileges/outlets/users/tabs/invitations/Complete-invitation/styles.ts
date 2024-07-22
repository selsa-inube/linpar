import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledContainerAssisted {
  cursorDisabled: boolean;
}

export const StyledContainerAssisted = styled.div<IStyledContainerAssisted>`
  & div > div:nth-child(3) button {
    cursor: ${({ cursorDisabled }) =>
      cursorDisabled ? "not-allowed" : "pointer"};
  }
  & div > div:nth-child(3) button div p,
  & div > div:nth-child(3) button div figure {
    color: ${({ cursorDisabled }) =>
      cursorDisabled
        ? inube.color.text.dark.disabled
        : inube.color.text.primary.regular};
  }
`;

export const StyledContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 300px;
`;
