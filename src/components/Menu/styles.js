import styled from "styled-components";
import { colors } from "../../styles/colors";

const StyledMenu = styled.nav`
  width: 248px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid ${colors.ref.palette.lightNeutral.ln500};
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
`;

const StyledLink = styled.button`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  column-gap: 25px;
  padding: ${(props) =>
    props.active ? "0px 12px 0px 13px" : "0px 12px 0px 18px"};
  height: 40px;
  text-align: left;
  min-width: 100%;
  font-weight: ${(props) => (props.active ? "550" : "400")};
  border-left: ${(props) =>
    props.active
      ? `5px solid ${colors.ref.palette.darkNeutral.dn500};`
      : "0px"};
  border-top: 0;
  border-right: 0;
  border-bottom: 0;
  border-radius: 2px;
  background: ${(props) =>
    props.active
      ? colors.ref.palette.lightNeutral.ln200
      : colors.ref.palette.lightNeutral.ln50};
  color: ${colors.ref.palette.darkNeutral.dn500};

  & svg {
    width: 24px;
    height: 24px;
  }

  & svg:first-child {
    color: ${(props) =>
      props.active
        ? colors.ref.palette.blue.b500
        : colors.ref.palette.darkNeutral.dn500};
  }

  & svg:last-child {
    display: ${(props) => (props.active ? "block" : "none")};
    width: 27px;
    height: 26.6px;
    justify-self: end;
  }
`;

const StyledDivisor = styled.hr`
  border-top: 1px solid ${colors.ref.palette.lightNeutral.ln500};
  margin: 8px 17px;
  width: 216px;
`;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  & p {
    color: ${colors.ref.palette.lightNeutral.ln500};
    padding: 24px;
    margin: 0px;
  }
`;

export {
  StyledMenu,
  StyledTitle,
  StyledNavList,
  StyledDivisor,
  StyledFooter,
  StyledLink,
};
