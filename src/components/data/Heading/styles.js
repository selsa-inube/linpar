import styled, { css } from "styled-components";

import { typography } from "../../../styles/typography";

const styles = css`
  font-family: ${({ token }) => typography.sys.typescale[token].font};
  line-height: ${({ token }) => typography.sys.typescale[token].lineHeight};
  font-size: ${({ token }) => typography.sys.typescale[token].size};
  letter-spacing: ${({ token }) => typography.sys.typescale[token].tracking};
  font-weight: ${({ token }) => typography.sys.typescale[token].weight};
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
