import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledColorTokenCard {
  tokenName: string;
  color: string;
  isActive: boolean;
  smallScreen: boolean;
}

export function getTokenColor(tokenName: string, theme: typeof inube) {
  for (const category in inube.color.palette) {
    if (Object.hasOwnProperty.call(inube.color.palette[category], tokenName)) {
      return (
        theme?.color?.palette[category!]?.[tokenName] ||
        inube.color.palette[category!]?.[tokenName]
      );
    }
  }
}

const HiddenColorPicker = styled.input.attrs({ type: "color" })`
  display: flow;
  height: 0px;
  opacity: 0;
`;

const StyledColorTokenCard = styled.div<IStyledColorTokenCard>`
  width: 100%;
  height: ${({ smallScreen }) => (smallScreen ? "56px" : "auto")};
  box-sizing: border-box;
  border-radius: ${inube.spacing.s100};
  cursor: pointer;
  background-color: ${({ color, tokenName, theme }) => {
    return color ? color : getTokenColor(tokenName, theme);
  }};
`;

export { StyledColorTokenCard, HiddenColorPicker };
