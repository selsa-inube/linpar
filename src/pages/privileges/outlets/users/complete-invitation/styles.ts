import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledContainer {
  smallScreen: boolean;
}

const StyledContainer = styled.div<IStyledContainer>`
  padding: ${({ smallScreen }) =>
    smallScreen
      ? inube.spacing.s200
      : `${inube.spacing.s400} ${inube.spacing.s800}`};
`;

export { StyledContainer };
