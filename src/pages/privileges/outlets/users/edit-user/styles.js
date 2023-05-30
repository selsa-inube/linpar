import styled from "styled-components";

const StyledContainer = styled.div`
  padding: ${(props) => (props.smallScreen ? "16px" : "32px 64px")};

  div > div:last-of-type > div:nth-of-type(2) {
    gap: 8px;
  }

  div:last-child > div:last-child > div:last-child::-webkit-scrollbar {
    display: none;
  }

  div:last-child > div:last-child > div:last-child {
    -ms-overflow-style: none;
  }

  div:last-child > div:last-child > div:last-child {
    scrollbar-width: none;
  }
`;

export { StyledContainer };
