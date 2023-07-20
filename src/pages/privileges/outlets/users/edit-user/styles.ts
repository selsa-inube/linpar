import styled from "styled-components";

interface IStyledContainer {
  smallScreen: boolean;
}

const StyledContainer = styled.div<IStyledContainer>`
  padding: ${(props) => (props.smallScreen ? "16px" : "32px 64px")};

  div > div:last-of-type > div:nth-of-type(2) {
    gap: 8px;
  }
`;

export { StyledContainer };
