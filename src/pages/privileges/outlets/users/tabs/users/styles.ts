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

export {
  StyledMessageContainer,
  CenteredTd,
  StyledContainerEdit,
  StyledContainerIcon,
};
