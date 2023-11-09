import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledContainer {
  smallScreen?: boolean;
  themed?: typeof inube;
}

const StyledContainer = styled.div<IStyledContainer>`
  padding: ${({ smallScreen, themed }) =>
    smallScreen
      ? themed?.spacing?.s200 || inube.spacing.s200
      : `${themed?.spacing?.s400} ${themed?.spacing?.s800}` ||
        `${inube.spacing.s400} ${inube.spacing.s800}`};

  div > div:last-of-type > div:nth-of-type(2) {
    gap: ${({ themed }) => themed?.spacing?.s100 || inube.spacing.s100};
  }
`;

const StyledTextFieldContainer = styled.div`
  width: 280px;
`;

const StyledOptionsContainer = styled.div`
  height: 24px;
`;

export { StyledContainer, StyledOptionsContainer, StyledTextFieldContainer };
