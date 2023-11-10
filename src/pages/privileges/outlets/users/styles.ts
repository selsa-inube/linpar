import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledContainer {
  smallScreen?: boolean;
}

const StyledContainer = styled.div<IStyledContainer>`
  padding: ${({ smallScreen, theme }) =>
    smallScreen
      ? `${theme?.spacing?.s100 || inube.spacing.s100}`
      : `${theme?.spacing?.s400 || inube.spacing.s800} ${
          theme?.spacing?.s800 || inube.spacing.s800
        }`};
`;

const StyledTextFieldContainer = styled.div`
  width: 280px;
`;

const StyledOptionsContainer = styled.div`
  height: 24px;
`;

export { StyledContainer, StyledOptionsContainer, StyledTextFieldContainer };
