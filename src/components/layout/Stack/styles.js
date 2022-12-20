import styled from "styled-components";

const StyledStack = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "column")};
  gap: ${({ spacing }) => (spacing ? `${spacing}px` : `0px`)};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
`;

export { StyledStack };
