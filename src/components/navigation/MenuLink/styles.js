import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../../styles/colors";
import { typography } from "../../../styles/typography";

const StyledLink = styled(Link)`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  height: 40px;
  gap: 8px;
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
    props.isSelected ? `5px solid ${colors.ref.palette.neutral.n900};` : "0px"};

  background: ${(props) =>
    props.isSelected
      ? colors.ref.palette.neutral.n30
      : colors.ref.palette.neutral.n0a};

  padding: ${(props) =>
    props.isSelected ? "0px 12px 0px 13px" : "0px 12px 0px 18px"};

  & svg:first-child {
    color: ${(props) =>
      props.isSelected
        ? colors.ref.palette.blue.b400
        : colors.ref.palette.neutral.n900};
  }

  & svg:last-child path {
    width: 27px;
    height: 26.6px;
    justify-self: end;

    display: ${(props) => (props.isSelected ? "block" : "none")};
  }

  &:hover {
    background: ${colors.ref.palette.neutral.n30};
  }

  &:hover p {
    font-weight: ${typography.ref.typeface.weight.medium};
  }

  &:hover svg:first-child {
    color: ${colors.ref.palette.blue.b400};
  }
`;

export { StyledLink };
