import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledColorTokenCard {
  tokenName: string;
  isActive: boolean;
  smallScreen: boolean;
}

function getTokenColor(tokenName: string, theme: typeof inube) {
  const palette = theme?.color?.palette || inube.color.palette;
  for (const category in palette) {
    if (Object.hasOwnProperty.call(palette[category], tokenName)) {
      return palette[category!]?.[tokenName];
    }
  }
}

const HiddenColorPicker = styled.input.attrs({ type: "color" })`
  display: flow;
  height: 0px;
  opacity: 0;
`;

const StyledColorTokenCard = styled.div<IStyledColorTokenCard>`
  display: ${({ smallScreen }) => (smallScreen ? "flex" : "inherit")};
  align-items: ${({ smallScreen }) => (smallScreen ? "center" : "unset")};
  justify-content: ${({ smallScreen }) => (smallScreen ? "center" : "unset")};
  width: auto;
  height: ${({ smallScreen }) => (smallScreen ? "36px" : "auto")};
  box-sizing: border-box;
  border-radius: ${inube.spacing.s100};
  cursor: pointer;
  background-color: ${({ tokenName, theme }) =>
    getTokenColor(tokenName, theme)};
`;

export { StyledColorTokenCard, HiddenColorPicker, getTokenColor };
