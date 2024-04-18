import { Link } from "react-router-dom";
import styled from "styled-components";
import { inube } from "@inube/design-system";

const StyledAppPage = styled.div`
  display: inherit;
  box-sizing: border-box;
`;

const StyledHeaderContainer = styled.div`
  div > div {
    cursor: pointer;
  }
`;

const StyledContainer = styled.div`
  display: inherit;
  overflow: hidden;
`;

const StyledMain = styled.main`
  box-sizing: border-box;
  height: calc(100vh - 54px);
  overflow-y: auto;
`;

const StyledContentImg = styled(Link)`
  width: 100px;
`;

const StyledLogo = styled.img`
  max-width: 100px;
`;

const StyledContainerNav = styled.div`
  max-height: calc(100vh - 50px);
`;

const StyledMenuContainer = styled.div`
  position: absolute;
  top: 48px;
  right: 15px;
  z-index: 1;
  overflow: hidden;
  border-radius: 8px;
  width: 312px;
  box-shadow: 0px 2px 3px 0px #091e4221;
  box-shadow: 0px 6px 10px 4px #091e4221;
  background-color: ${({ theme }) =>
    theme.color?.surface?.light?.clear || inube.color.surface.light.clear};
`;

export {
  StyledAppPage,
  StyledHeaderContainer,
  StyledContainer,
  StyledContentImg,
  StyledLogo,
  StyledMain,
  StyledContainerNav,
  StyledMenuContainer,
};
