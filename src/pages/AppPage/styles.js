import styled from "styled-components";
import { colors } from "../../styles/colors";

const StyledAppPage = styled.div`
  box-sizing: border-box;
  height: 100vh;
  overflow-y: scroll;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;

  & nav {
    border-right: 1px solid ${colors.ref.palette.lightNeutral.ln400};
    padding: 10px;
  }
`;

const StyledMain = styled.main`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
`;

export { StyledAppPage, StyledContainer, StyledMain };
