import styled from "styled-components";
import { inube } from "@inube/design-system";
import { getTokenColor } from "@src/utils/getTokenColor";

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

const HiddenColorPicker = styled.input.attrs({ type: "color" })`
  display: flow;
  width: 0;
  height: 0;
  opacity: 0;
`;

const StyledHoverPopup = styled.div`
  position: absolute;
  height: calc(auto+24px);
`;
const StyledHoverIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  display: none;
`;

const StyledColorTokenCard = styled.div<IStyledColorTokenCard>`
  display: ${({ smallScreen }) => (smallScreen ? "flex" : "inherit")};
  align-items: ${({ smallScreen }) => (smallScreen ? "center" : "unset")};
  justify-content: ${({ smallScreen }) => (smallScreen ? "center" : "unset")};
  width: ${({ width }) => (width ? width : "auto")};
  height: ${({ smallScreen }) => (smallScreen ? "36px" : "auto")};
  box-sizing: border-box;
  border-radius: ${inube.spacing.s100};
  cursor: pointer;
  min-width: max-content;
  background-color: ${({ tokenName, theme }) =>
    getTokenColor(tokenName, theme)};
  position: relative;

  &:hover ${StyledHoverIcon} {
    display: block;
  }
`;

const StyledGridContainer = styled.div<StyledPaletteUI>`
  background-color: ${({ theme, hasBackground }) =>
    hasBackground
      ? theme?.color?.surface?.dark?.clear || inube.color.surface.dark.clear
      : "unset"};
  border-radius: ${inube.spacing.s100};
  padding: ${({ hasBackground }) =>
    hasBackground ? inube.spacing.s150 : inube.spacing.s0};
  width: 100%;
  & div {
    place-content: unset;
  }
`;

const StyledGridColorsContainer = styled.div`
  overflow: auto;
  width: 100%;
`;

const StyledDivText = styled.div`
  width: 51px;
`;

export {
  StyledColorTokenCard,
  HiddenColorPicker,
  StyledGridContainer,
  StyledGridColorsContainer,
  StyledDivText,
  StyledHoverPopup,
  StyledHoverIcon,
};
