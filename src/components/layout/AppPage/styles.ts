import { Link } from "react-router-dom";
import styled from "styled-components";

interface IStyledContainer {
  smallScreen: boolean;
}

const StyledAppPage = styled.div`
  box-sizing: border-box;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const StyledContainer = styled.div<IStyledContainer>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.smallScreen ? "auto" : "auto 1fr"};
  overflow: hidden;
`;

const StyledMain = styled.main`
  box-sizing: border-box;
  overflow-y: auto;
`;

const StyledContentImg = styled(Link)`
  width: 100px;
`;

const StyledLogo = styled.img`
  max-width: 100px;
`;

export {
  StyledAppPage,
  StyledContainer,
  StyledContentImg,
  StyledLogo,
  StyledMain,
};
