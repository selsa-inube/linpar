import styled from "styled-components";

const StyledIcon = styled.picture`
  & svg {
    width: 24px;
    height: 24px;
  }
`;

const StyledArrowIcon = styled.div`
  cursor: pointer;

  & svg {
    width: 24px;
    height: 24px;
  }
`;

export { StyledIcon, StyledArrowIcon };
