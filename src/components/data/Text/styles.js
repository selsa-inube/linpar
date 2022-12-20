import styled from "styled-components";
import { typography } from "../../../styles/typography";

const StyledParagraph = styled.p`
  font-family: ${({ token }) => typography.sys.typescale[token].font};
  line-height: ${({ token }) => typography.sys.typescale[token].lineHeight};
  font-size: ${({ token }) => typography.sys.typescale[token].size};
  letter-spacing: ${({ token }) => typography.sys.typescale[token].tracking};
  font-weight: ${({ token }) => typography.sys.typescale[token].weight};
  text-align: ${({ align }) => align};
`;

export { StyledParagraph };
