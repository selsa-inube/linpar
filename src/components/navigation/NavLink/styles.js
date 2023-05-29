import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../styles/colors";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.sys.text.secondary};
  padding: 8px 12px;
  display: inline-block;
`;

export { StyledLink };
