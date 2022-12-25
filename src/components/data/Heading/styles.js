import styled, { css } from "styled-components";

import { typography } from "../../../styles/typography";
import { colors } from "../../../styles/colors";

const styles = css`
  font-family: ${({ typoToken }) => typography.sys.typescale[typoToken].font};
  line-height: ${({ typoToken }) =>
    typography.sys.typescale[typoToken].lineHeight};
  font-size: ${({ typoToken }) => typography.sys.typescale[typoToken].size};
  letter-spacing: ${({ typoToken }) =>
    typography.sys.typescale[typoToken].tracking};
  font-weight: ${({ typoToken }) => typography.sys.typescale[typoToken].weight};
  text-align: ${({ align }) => align};
  color: ${({ colorToken }) => colors.sys.text[colorToken]};
`;

const StyledH1 = styled.h1`
  ${styles}
`;

const StyledH2 = styled.h2`
  ${styles}
`;

const StyledH3 = styled.h3`
  ${styles}
`;

const StyledH4 = styled.h4`
  ${styles}
`;

const StyledH5 = styled.h5`
  ${styles}
`;

const StyledH6 = styled.h6`
  ${styles}
`;

export { StyledH1, StyledH2, StyledH3, StyledH4, StyledH5, StyledH6 };
