import styled from "styled-components";
import { colors } from "../../styles/colors";
import { Link } from "react-router-dom";

const StyledMenu = styled.nav`
  width: 248px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid ${colors.ref.palette.neutral.n60};
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

const StyledLink = styled(Link)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  column-gap: 25px;
  height: 40px;
  text-align: left;
  width: 100%;
  border-radius: 2px;
  color: ${colors.ref.palette.neutral.n900};
  text-decoration: none;

  & svg {
    width: 24px;
    height: 24px;
  }

  border-left: ${(props) =>
    props.selected ? `5px solid ${colors.ref.palette.neutral.n900};` : "0px"};

  background: ${(props) =>
    props.selected
      ? colors.ref.palette.neutral.n30
      : colors.ref.palette.neutral.n0};

  padding: ${(props) =>
    props.selected ? "0px 12px 0px 13px" : "0px 12px 0px 18px"};

  & svg:first-child {
    color: ${(props) =>
      props.selected
        ? colors.ref.palette.blue.b400
        : colors.ref.palette.neutral.n900};
  }

  & svg:last-child {
    width: 27px;
    height: 26.6px;
    justify-self: end;

    display: ${(props) => (props.selected ? "block" : "none")};
  }

  &:hover {
    background: ${colors.ref.palette.neutral.n30};
  }

  &:hover p {
    font-weight: 500;
  }

  &:hover svg:first-child {
    color: ${colors.ref.palette.blue.b400};
  }
`;

const StyledDivisor = styled.hr`
  border-top: 1px solid ${colors.ref.palette.neutral.n60};
  margin: 8px 17px;
  width: 216px;
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

export {
  StyledMenu,
  StyledTitle,
  StyledNavList,
  StyledDivisor,
  StyledFooter,
  StyledLink,
};
