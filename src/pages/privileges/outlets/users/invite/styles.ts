import styled from "styled-components";

const StyledContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 300px;
`;

const StyledMessageContainer = styled.div`
  position: fixed;
  bottom: 18px;
  right: 75px;
  z-index: 2;
`;

export { StyledMessageContainer, StyledContainerLoading };
