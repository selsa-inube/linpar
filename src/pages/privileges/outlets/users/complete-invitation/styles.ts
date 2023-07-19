import styled from "styled-components";

interface IStyledContainer {
  smallScreen: boolean;
}

const StyledContainer = styled.div<IStyledContainer>`
  padding: ${(props) => (props.smallScreen ? "16px" : "32px 64px")};
`;

export { StyledContainer };
