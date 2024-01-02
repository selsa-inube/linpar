import styled from "styled-components";

const StyledMessageContainer = styled.div`
  position: fixed;
  bottom: 18px;
  right: 75px;
  z-index: 2;
`;

const StyledContainer = styled.div`
  position: relative;
  // > div:nth-child(-n + 2) {
  //   grid-template-columns: 1fr;
  // }

  // & div {
  //   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  // }
`;

export { StyledMessageContainer, StyledContainer };
