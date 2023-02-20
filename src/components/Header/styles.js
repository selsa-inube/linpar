import styled from "styled-components";
import { colors } from "../../styles/colors";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  max-height: 56px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 0px 0px 0px 16px;
  border-bottom: 1px solid ${colors.ref.palette.neutral.n40};
  column-gap: 16px;
  @media (min-width: 850px) {
    grid-template-columns: 1fr auto;
  }
`;

const StyledLogo = styled.img`
  max-width: 100px;
`;

const StyledcontentImg = styled(Link)`
  width: 100px;
`;

const StyledIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${colors.ref.palette.neutral.n900};
  & svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  @media (min-width: 850px) {
    display: none;
  }
`;

const StyledMenuWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  & nav {
    height: 100vh;
    overflow-y: auto;
  }
`;

export {
  StyledHeader,
  StyledLogo,
  StyledIcon,
  StyledMenuWrapper,
  StyledcontentImg,
};
