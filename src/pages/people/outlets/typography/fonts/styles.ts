import styled from "styled-components";

interface IStyledContainer {
  smallScreen?: boolean;
  typeTabs?: boolean;
}

const StyledContainer = styled.div`
  position: relative;
`;

const StyledTabsContainer = styled.div<IStyledContainer>`
  position: ${(props) => (props.typeTabs ? "relative" : "unset")};
`;

export { StyledContainer, StyledTabsContainer };
