import { Link } from "react-router-dom";
import styled from "styled-components";
import { inube } from "@inubekit/foundations";

interface IStyledCollapseIcon {
  $collapse: boolean;
  $isTablet: boolean;
}

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

const StyledContainerNav = styled.nav`
  max-height: calc(100vh - 50px);
  nav {
    height: 100vh;
  }
  footer {
    padding-bottom: 70px;
  }
  img {
    max-width: 90px;
  }
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
    theme.palette.neutral.N0 || inube.palette.neutral.N0};
`;

const StyledCollapseIcon = styled.div<IStyledCollapseIcon>`
  display: flex;
  transition: all 500ms ease;
  position: absolute;
  top: 13.5px;
  transform: ${({ $collapse }) =>
    $collapse ? "rotate(-90deg)" : "rotate(90deg)"};
  left: ${({ $isTablet }) => ($isTablet ? "150px" : "142px")};
`;

const StyledCollapse = styled.div`
  position: absolute;
  margin-top: 5px;
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
  StyledCollapseIcon,
  StyledCollapse,
};
