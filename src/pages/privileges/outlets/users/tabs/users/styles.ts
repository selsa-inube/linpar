import styled from "styled-components";

const StyledMessageContainer = styled.div`
  position: fixed;
  bottom: 18px;
  right: 75px;
  z-index: 2;
`;

const CenteredTd = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { StyledMessageContainer, CenteredTd };
