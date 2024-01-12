import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledFieldsetColorCard {
  tokenName: string;
  tokenColor: string;
  color: string;
  isActive: boolean;
  smallScreen: boolean;
}

function getTokenColor(tokenName: string, theme?: typeof inube) {
  const palette = theme?.color?.palette || inube.color.palette;
  for (const category in palette) {
    if (Object.hasOwnProperty.call(palette[category], tokenName)) {
      return palette[category!]?.[tokenName];
    }
  }
}

const StyledTokenColorCardContainer = styled.div`
  width: 100%;
  max-width: ${inube.spacing.s1000};
  & > div {
    width: 100%;
    height: 24px;
    max-width: 80px;
    & > div {
      justify-content: center;
      padding: 4px;
    }
  }
`;

const StyledPopupContainer = styled.div`
  & > div > div {
    height: 100%;
    width: 100%;
    max-width: 350px;
    max-height: 400px;
  }
`;

export { StyledTokenColorCardContainer, StyledPopupContainer, getTokenColor };
