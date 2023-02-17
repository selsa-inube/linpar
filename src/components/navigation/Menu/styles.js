import styled from "styled-components";
import { colors } from "../../../styles/colors";

const StyledMenu = styled.nav`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${colors.ref.palette.neutral.n10};
  border-right: 1px solid ${colors.ref.palette.neutral.n40};

  & div > div > svg {
    padding: 24px 16px 0px;
  }

  @media (min-width: 850px) {
    display: none;
  }
`;

const StyledTitle = styled.div`
  padding: 20px 17px;
`;

const StyledNavList = styled.ul`
  padding: 0px;
  margin: 0px;
  display: grid;
  gap: 4px;
  list-style: none;
`;

const StyledDivisor = styled.hr`
  box-sizing: border-box;
  border-top: 1px solid ${colors.ref.palette.neutral.n40};
  margin: 8px 16px;
  width: auto;
`;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  & p {
    color: ${colors.ref.palette.neutral.n60};
    padding: 24px;
    margin: 0px;
  }
`;

export { StyledMenu, StyledTitle, StyledNavList, StyledDivisor, StyledFooter };
