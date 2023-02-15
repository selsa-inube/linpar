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
      height: calc(100vh - 53px);
      border-right: 0px;
      display: ${(props) => (props.menu ? "flex" : "none")};
    }

    & nav div p:first-child {
      font-size: 24px;
      font-weight: 400;
    }

    & nav > div > div:first-child {
      padding: 32px 16px;
    }
  }
`;

const StyledMain = styled.main`
  box-sizing: border-box;
  overflow-y: scroll;
`;

export { StyledAppPage, StyledContainer, StyledMain };
