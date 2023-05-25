import styled from "styled-components";

const StyledContainer = styled.div`
  padding: ${(props) => (props.smallScreen ? "16px" : "32px 64px")};
`;

export { StyledContainer };
