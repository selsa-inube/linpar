import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledColorTokenCard {
  tokenName: string;
  tokenColor: string;
  color: string;
  isActive: boolean;
  smallScreen: boolean;
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
  background-color: ${({ color, tokenColor }) => {
    return color ? color : tokenColor;
  }};
`;

export { StyledColorTokenCard, HiddenColorPicker };
