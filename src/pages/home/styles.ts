import styled from "styled-components";

const StyledHome = styled.div`
  box-sizing: border-box;
  padding-bottom: 40px;
  height: 100vh;
  overflow-y: scroll;
  #PageTitle {
    max-width: 1400px;
  }
`;

const StyledAppsList = styled.ul`
  box-sizing: border-box;
  max-width: 1400px;
  list-style: none;
  margin: 0 auto;
`;

export { StyledHome, StyledAppsList };
