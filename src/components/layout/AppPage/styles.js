import styled from "styled-components";

const StyledAppPage = styled.div`
  box-sizing: border-box;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  @media (max-width: 849px) {
    grid-template-columns: auto;
    & nav {
      width: 100%;
      display: ${(props) => (props.menu ? "" : "none")};
    }

    & main {
      display: ${(props) => (props.menu ? "none" : "")};
    }
  }
`;

const StyledMain = styled.main`
  box-sizing: border-box;
  overflow-y: scroll;
`;

export { StyledAppPage, StyledContainer, StyledMain };
