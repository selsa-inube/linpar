import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledAssistedContainer {
  $cursorDisabled: boolean;
}

const StyledAssistedContainer = styled.div<IStyledAssistedContainer>`
  border-radius: ${({ theme }) => theme?.spacing?.s100 || inube.spacing.s100};
  padding: ${({ theme }) => theme?.spacing?.s200 || inube.spacing.s200};
  background-color: ${({ theme }) =>
    theme?.color?.surface?.gray?.clear || inube.color.surface.gray.clear};
  & div > div:nth-child(3) button div p,
  & div > div:nth-child(3) button div figure {
    cursor: ${({ $cursorDisabled }) =>
      $cursorDisabled ? "not-allowed" : "pointer"};
    color: ${({ $cursorDisabled }) =>
      $cursorDisabled
        ? inube.color.text.dark.disabled
        : inube.color.text.primary.regular};
  }
`;

export { StyledAssistedContainer };
