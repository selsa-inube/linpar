import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../styles/colors";
import { typography } from "../../../styles/typography";

const StyledLi = styled.li`
  display: inline-block;

  ::after {
    content: "/";
    margin: 0 8px;
  }

  :last-child:after {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: ${({ typoToken }) => typography.sys.typescale[typoToken].font};
  line-height: ${({ typoToken }) =>
    typography.sys.typescale[typoToken].lineHeight};
  font-size: ${({ typoToken }) => typography.sys.typescale[typoToken].size};
  letter-spacing: ${({ typoToken }) =>
    typography.sys.typescale[typoToken].tracking};
  font-weight: ${({ typoToken }) => typography.sys.typescale[typoToken].weight};
  color: ${({ colorToken }) => colors.sys.text[colorToken]};
`;

export { StyledLi, StyledLink };
