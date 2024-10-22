import styled from "styled-components";

export const StyledContainer = styled.div`
  position: relative;
`;

const StyledContainerEdit = styled.div`
  display: flex;
  justify-content: center;

  & > a {
    display: flex;
    text-decoration: none;
    align-items: center;
  }
  & > a > p {
    display: none;
  }
  @media (max-width: 1200px) {
    & > a > p {
      display: block;
    }
  }
`;

const StyledContainerIcon = styled.figure`
  display: flex;
  padding: 0;
  margin: 0;
  align-items: center;
`;

export { StyledContainerEdit, StyledContainerIcon };
