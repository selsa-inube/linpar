import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../styles/colors";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.sys.text.secondary};
  padding: 8px 12px 8px 12px;
  display: inline-block;
  > * {
    height: 32px;
  }
  &:hover {
    cursor: pointer;
    background-color: ${colors.ref.palette.neutral.n30};
  }
`;

export { StyledLink };
