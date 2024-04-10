import styled from "styled-components";
import { inube } from "@inube/design-system";

const StyledHome = styled.div`
  box-sizing: border-box;
  padding-bottom: 40px;
  height: 100vh;
  li {
    list-style: none;
  }
`;
const StyledHeaderContainer = styled.div`
  div > div {
    cursor: pointer;
  }
`;

const StyledMenuContainer = styled.div`
  position: absolute;
  top: 48px;
  right: 15px;
  z-index: 1;
  overflow: hidden;
  border-radius: ${inube.spacing.s100};
  width: 312px;
  box-shadow: 0px 2px 3px 0px #091e4221;
  box-shadow: 0px 6px 10px 4px #091e4221;
  background-color: ${({ theme }) =>
    theme.color?.surface?.light?.clear || inube.color.surface.light.clear};
`;

export { StyledHome, StyledHeaderContainer, StyledMenuContainer };
