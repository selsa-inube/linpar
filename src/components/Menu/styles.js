import styled from "styled-components";
import { colors } from "../../styles/colors";

const StyledMenu = styled.div`
  width: 248px;
  height: 970px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid ${colors.ref.palette.lightNeutral.ln500};
`;

const StyledTitle = styled.div`
  & p {
    padding: 20px 17px;
  }
`;

const StyledButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(1fr));
  gap: 5px;
  & button {
    display: grid;
    grid-template-columns: auto 1fr 1fr;
    column-gap: 25px;
    padding: 0px 12px 0px 18px;
    height: 40px;
    min-width: 100%;
    font-weight: 400;
    border-left: 5px solid transparent;
    border-radius: 2px;
    background-color: ${colors.ref.palette.lightNeutral.ln50};
    color: ${colors.ref.palette.darkNeutral.dn500};
  }

  & svg {
    width: 24px;
    height: 24px;
  }

  & svg:last-child {
    display: none;
    justify-self: end;
  }

  & .active {
    background: ${colors.ref.palette.lightNeutral.ln200};
    border-left: 5px solid ${colors.ref.palette.darkNeutral.dn500};
    font-weight: 500;
  }

  & .active svg:first-child {
    color: ${colors.ref.palette.blue.b500};
  }

  & .active svg:last-child {
    display: block;
    width: 27px;
    height: 26.6px;
  }
`;

const StyledDivisor = styled.div`
  background-color: ${colors.ref.palette.lightNeutral.ln500};
  margin: 8px 17px;
  width: 216px;
  height: 1px;
`;

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  & p {
    color: ${colors.ref.palette.lightNeutral.ln500};
    padding: 24px;
    margin: 0px;
  }
`;

export { StyledMenu, StyledTitle, StyledButtons, StyledDivisor, StyledFooter };
