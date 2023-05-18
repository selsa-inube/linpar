import styled from "styled-components";
import { colors } from "../../../styles/colors";

const StyledSubjectCard = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  border: 1px solid ${colors.ref.palette.neutral.n30};
  cursor: pointer;
  padding: ${(props) => (props.smallScreen ? "16px" : "8px 16px")};
  width: ${(props) => (props.smallScreen ? "56px" : "260px")};
  background-color: ${(props) =>
    props.isActive
      ? colors.ref.palette.neutral.n30
      : colors.ref.palette.neutral.n0};
  box-shadow: ${(props) =>
    props.isActive ? "none" : "0px 1px 2px " + colors.ref.palette.neutral.n30};

  & div:first-child {
    display: ${(props) => (props.smallScreen ? "none" : "block")};
  }
`;

const StyledIcon = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(${(props) => (props.isActive ? "90" : "0")}deg);
  color: ${(props) =>
    props.isActive
      ? colors.ref.palette.blue.b400
      : colors.ref.palette.neutral.n900};
`;

export { StyledSubjectCard, StyledIcon };
