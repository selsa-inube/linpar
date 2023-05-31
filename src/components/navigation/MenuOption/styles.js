import { colors } from "@styles/colors";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.sys.text.dark};
  padding: 8px 12px;
  display: inline-block;
`;

const StyledOption = styled.button`
  color: ${colors.sys.text.dark};
  padding: 8px 12px;
  display: inline-block;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export { StyledLink, StyledOption };
