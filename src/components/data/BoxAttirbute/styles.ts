import styled from "styled-components";

export const StyledBoxAttribute = styled.div`
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  white-space: normal;
  overflow-wrap: break-word;
  padding: 6px 16px;
`;

/* display: flex;
  height: 32px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;

  background-color: ${({ theme }) =>
    theme?.color?.surface?.gray?.clear || inube.palette.neutral.N10}; */
