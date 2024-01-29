import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledColorTokenCard {
  tokenName: string;
  isActive: boolean;
  type: "colorPicker" | "tokenPicker";
  smallScreen: boolean;
  width: string;
}

interface StyledPaletteUI {
  theme?: typeof inube;
  hasBackground: boolean;
}

function getTokenColor(tokenName: string, theme?: typeof inube) {
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

const StyledHoverPopup = styled.div`
  position: absolute;
  height: calc(auto+24px);
`;

const StyledColorTokenCard = styled.div<IStyledColorTokenCard>`
  display: ${({ smallScreen }) => (smallScreen ? "flex" : "inherit")};
  align-items: ${({ smallScreen }) => (smallScreen ? "center" : "unset")};
  justify-content: ${({ smallScreen, type }) =>
    type === "colorPicker"
      ? "space-between"
      : smallScreen
      ? "center"
      : "unset"};
  width: ${({ width }) => (width ? width : "auto")};
  height: ${({ smallScreen }) => (smallScreen ? "36px" : "auto")};
  box-sizing: border-box;
  border-radius: ${inube.spacing.s100};
  cursor: pointer;
  background-color: ${({ tokenName, theme }) =>
    getTokenColor(tokenName, theme)};
`;

const StyledGridContainer = styled.div<StyledPaletteUI>`
  background-color: ${({ theme, hasBackground }) =>
    hasBackground
      ? theme?.color?.surface?.dark?.clear || inube.color.surface.dark.clear
      : "unset"};
  border-radius: ${inube.spacing.s100};
  padding: ${({ hasBackground }) =>
    hasBackground ? inube.spacing.s150 : inube.spacing.s0};
  & div {
    place-content: unset;
  }
`;

const StyledGridColorsContainer = styled.div`
  overflow: auto;
`;

const StyledDivText = styled.div`
  width: 51px;
`;

export {
  StyledColorTokenCard,
  HiddenColorPicker,
  StyledGridContainer,
  StyledGridColorsContainer,
  getTokenColor,
  StyledDivText,
  StyledHoverPopup,
};
