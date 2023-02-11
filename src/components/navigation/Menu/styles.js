import styled from "styled-components";
import { colors } from "../../../styles/colors";

const StyledMenu = styled.nav`
  width: 248px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${colors.ref.palette.neutral.n10};
  border-right: 1px solid ${colors.ref.palette.neutral.n40};
`;

const StyledTitle = styled.div`
  padding: 20px 17px;
`;

const StyledNavList = styled.ul`
  padding: 0px;
  margin: 0px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(1fr));
  gap: 5px;
  list-style: none;
`;

const StyledDivisor = styled.hr`
  border-top: 1px solid ${colors.ref.palette.neutral.n40};
  margin: 8px 17px;
  max-width: 100%;
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
