import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledFieldsetColorCard {
  tokenName: string;
  tokenColor: string;
  color: string;
  isActive: boolean;
  smallScreen: boolean;
}

const StyledTokenColorCardContainer = styled.div`
  width: 100%;
  max-width: ${inube.spacing.s1000};
  & div {
    width: 100%;
    height: 24px;
    max-width: 80px;
    & div {
      padding: 0px 12px;
    }
  }
`;

export { StyledTokenColorCardContainer };
