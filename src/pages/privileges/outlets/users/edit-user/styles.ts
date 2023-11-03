import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledContainer {
  smallScreen: boolean;
}

const StyledContainer = styled.div<IStyledContainer>`
  padding: ${(props) =>
    props.smallScreen
      ? inube.spacing.s200
      : `${inube.spacing.s400} ${inube.spacing.s800}`};

  div > div:last-of-type > div:nth-of-type(2) {
    gap: ${inube.spacing.s100};
  }
`;

export { StyledContainer };
