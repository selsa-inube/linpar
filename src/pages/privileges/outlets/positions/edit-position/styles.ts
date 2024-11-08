import styled from "styled-components";

interface IStyledContainer {
  $smallScreen?: boolean;
  typeTabs?: boolean;
}

const StyledContainerLoading = styled.div<IStyledContainer>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 300px;
`;

const StyledContainer = styled.div<IStyledContainer>`
  padding: ${(props) => (props.$smallScreen ? "16px" : "32px 64px")};
`;

const StyledTabsContainer = styled.div<IStyledContainer>`
  position: ${(props) => (props.typeTabs ? "relative" : "unset")};
`;

export { StyledContainer, StyledTabsContainer, StyledContainerLoading };
