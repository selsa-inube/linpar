import { colors } from "@styles/colors";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.sys.text.secondary};
  display: inline-block;
  padding: 6px 13px;
  border: none;
  background-color: ${colors.ref.palette.neutral.n0};
  cursor: pointer;
  &:hover {
    background-color: ${colors.ref.palette.neutral.n30};
  }
`;

export { StyledLink };
