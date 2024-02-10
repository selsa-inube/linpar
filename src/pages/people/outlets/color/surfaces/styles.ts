import styled from "styled-components";

interface IStyledContainer {
  smallScreen?: boolean;
  typeTabs?: boolean;
}

const StyledMessageContainer = styled.div`
  position: fixed;
  bottom: 18px;
  right: 75px;
  z-index: 2;
`;

const StyledContainer = styled.div`
  position: relative;
`;

const StyledTabsContainer = styled.div<IStyledContainer>`
  position: ${(props) => (props.typeTabs ? "relative" : "unset")};
`;

export { StyledMessageContainer, StyledContainer, StyledTabsContainer };
