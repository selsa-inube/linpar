import styled from "styled-components";
import { typography } from "../../../styles/typography";

const StyledParagraph = styled.p`
  font-family: ${({ typoToken }) => typography.sys.typescale[typoToken].font};
  line-height: ${({ typoToken }) =>
    typography.sys.typescale[typoToken].lineHeight};
  font-size: ${({ typoToken }) => typography.sys.typescale[typoToken].size};
  letter-spacing: ${({ typoToken }) =>
    typography.sys.typescale[typoToken].tracking};
  font-weight: ${({ typoToken }) => typography.sys.typescale[typoToken].weight};
  text-align: ${({ align }) => align};
`;

export { StyledParagraph };
