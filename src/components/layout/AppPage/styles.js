import styled from "styled-components";

const StyledAppPage = styled.div`
  box-sizing: border-box;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.smallScreen ? "auto" : "auto 1fr"};
  overflow: hidden;
`;

const StyledMain = styled.main`
  box-sizing: border-box;
  overflow-y: auto;
`;

export { StyledAppPage, StyledContainer, StyledMain };
